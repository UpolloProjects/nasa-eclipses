import * as THREE from "three";

//positioning
const sx = 0;
const ex = sx + 16;
const mx = ex + 8;

//cam, scene, render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//sun obj + wireframe
const sunGeo = new THREE.SphereGeometry(6, 32, 32);
const sunMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeo, sunMat);
const sunWireGeo = new THREE.EdgesGeometry(sunGeo);
const sunWireMat = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2
});
const sunWireframe = new THREE.LineSegments(sunWireGeo, sunWireMat);
scene.add(sun, sunWireframe);

const earthGeo = new THREE.SphereGeometry(4, 32, 32);
const earthMat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const earth = new THREE.Mesh(earthGeo, earthMat);
const earthWireGeo = new THREE.EdgesGeometry(earthGeo);
const earthWireMat = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2
});
const earthWireframe = new THREE.LineSegments(earthWireGeo, earthWireMat);
earth.position.set(ex, 0, 0);
earthWireframe.position.set(ex, 0, 0);
scene.add(earth, earthWireframe);

const moonGeo = new THREE.SphereGeometry(2, 32, 32);
const moonMat = new THREE.MeshBasicMaterial({ color: 0x808080 });
const moon = new THREE.Mesh(moonGeo, moonMat);
const moonWireGeo = new THREE.EdgesGeometry(moonGeo);
const moonWireMat = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 2
});
const moonWireframe = new THREE.LineSegments(moonWireGeo, moonWireMat);
moon.position.set(mx, 0, 0);
moonWireframe.position.set(mx, 0, 0);
scene.add(moon, moonWireframe);

camera.position.z = 30;
camera.lookAt(new THREE.Vector3(7, 1, 1));

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.001;
  earth.rotation.y += 0.001;
  moon.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animate();
