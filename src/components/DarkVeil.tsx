import { useRef, useEffect } from 'react';
import { Renderer, Program, Mesh, Triangle, Vec2 } from 'ogl';

const vertex = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScanlineIntensity;
uniform float uScanlineFrequency;
uniform float uWarpAmount;

float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 warpedUv = uv;
  
  if (uWarpAmount > 0.0) {
    warpedUv.x += sin(uv.y * 10.0 + uTime) * uWarpAmount * 0.01;
    warpedUv.y += cos(uv.x * 10.0 + uTime) * uWarpAmount * 0.01;
  }

  float t = uTime * 0.3;
  
  float v1 = sin(warpedUv.x * 3.0 + t * 1.1) * 0.5 + 0.5;
  float v2 = cos(warpedUv.y * 4.0 - t * 0.7) * 0.5 + 0.5;
  float v3 = sin((warpedUv.x + warpedUv.y) * 2.0 + t * 0.5) * 0.5 + 0.5;
  float v4 = sin(length(warpedUv - 0.5) * 5.0 - t) * 0.5 + 0.5;
  
  float combined = (v1 + v2 + v3 + v4) * 0.25;
  
  float hue = combined * 0.1 + 0.6 + uHueShift / 360.0;
  float sat = 0.3 + combined * 0.2;
  float val = combined * 0.15 + 0.02;
  
  vec3 col = hsv2rgb(vec3(hue, sat, val));
  
  if (uScanlineIntensity > 0.0) {
    float scanline = sin(gl_FragCoord.y * uScanlineFrequency) * 0.5 + 0.5;
    col -= scanline * uScanlineIntensity * 0.1;
  }
  
  col.rgb += (rand(gl_FragCoord.xy + uTime) - 0.5) * uNoise;
  
  gl_FragColor = vec4(clamp(col.rgb, 0.0, 1.0), 1.0);
}
`;

interface DarkVeilProps {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
}

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1
}: DarkVeilProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new Renderer({ canvas, dpr: resolutionScale });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const resize = () => {
      const w = canvas.parentElement?.clientWidth || canvas.clientWidth;
      const h = canvas.parentElement?.clientHeight || canvas.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = new Vec2(w, h);
    };

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2(canvas.clientWidth, canvas.clientHeight) },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScanlineIntensity: { value: scanlineIntensity },
        uScanlineFrequency: { value: scanlineFrequency },
        uWarpAmount: { value: warpAmount },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    window.addEventListener('resize', resize);
    resize();

    let animId: number;
    const update = (t: number) => {
      animId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    };
    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [hueShift, noiseIntensity, scanlineIntensity, speed, scanlineFrequency, warpAmount, resolutionScale]);

  return <canvas ref={ref} className="w-full h-full block" />;
}
