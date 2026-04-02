// js/main.js

console.log('Sistema de auditoría iniciado...');

//Simulando un error de ejecuación que bloquea la carga
try {
  const data = null;
  console.log(data.length); // Esto lanzará un TypeError
} catch (error) {
  console.error('Error detectado en la console:', error.message);
}

//Simulación de carga pesada para analizar en Network
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log('Recursos pesados cargados:', data.length));
