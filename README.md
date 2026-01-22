# 📝 To-Do List

Un aplicación web interactiva para gestionar tareas personales, con funcionalidades de categorización y filtrado. Desarrollado como primer proyecto personal en JavaScript vanilla.

## ✨ Características

- ✅ **Crear tareas**: Añade nuevas tareas con nombre, descripción y categoría
- 📂 **Categorías personalizadas**: Crea categorías propias para organizar tus tareas
- 🔍 **Filtrado dinámico**: Filtra tareas por estado (Completado/Incompleto) y/o categoría
- ✔️ **Marcar como completado**: Cambia el estado de las tareas con un clic
- 🗑️ **Eliminar tareas**: Borra tareas que ya no necesites
- 🔔 **Modal de detalles**: Visualiza la información completa de cada tarea en un modal
- 📱 **Interfaz responsiva**: Diseño adaptado para diferentes pantallas

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsivo (Grid y Flexbox)
- **JavaScript Vanilla**: Lógica de la aplicación (sin frameworks)
- **Bootstrap Icons**: Iconos de interfaz
- **Google Fonts**: Tipografía personalizada

## 📁 Estructura del Proyecto

```
ToDo-List/
├── index.html           # Archivo HTML principal
├── app.js              # Lógica principal (crear, marcar, eliminar, filtrar)
├── categoryTasks.js    # Gestión de categorías y array de tareas
├── styles.css          # Estilos de la aplicación
├── assets/
│   └── images/
│       └── favicon.png
└── README.md           # Este archivo
```

## 🎯 Cómo Usar

### 1. **Crear una Categoría**
- Haz clic en el icono **"+"** junto al selector de categorías
- Ingresa el nombre de la categoría
- La categoría se agregará automáticamente a ambos selectores

### 2. **Agregar una Tarea**
- Escribe el nombre de la tarea en el campo "Introduce una tarea"
- Añade una descripción (opcional)
- Selecciona una categoría
- Haz clic en "Agregar tarea"

### 3. **Marcar como Completado**
- Haz clic en el icono ✓ (verde) en la tarea
- El estado cambiará a "completado" y aparecerá tachada
- Puedes volver a hacer clic para marcarla como incompleta

### 4. **Eliminar una Tarea**
- Haz clic en el icono ✕ (blanco) en la tarea
- La tarea se eliminará de la lista

### 5. **Ver Detalles**
- Haz clic en el nombre de la tarea
- Se abrirá un modal con el título, descripción, estado y categoría

### 6. **Filtrar Tareas**
- **Por Estado**: Selecciona "Completado", "Incompleto" o "Todos"
- **Por Categoría**: Selecciona una categoría o "Todos"
- Los filtros funcionan en combinación (AND)

## 🎨 Paleta de Colores

- **Tareas Incompletas**: `#407ba6` (azul)
- **Tareas Completadas**: `#000000` (negro)
- **Icono Completar**: `rgb(0, 255, 0)` (verde)
- **Icono Eliminar**: `rgb(255, 255, 255)` (blanco)

## 💾 Datos

Las tareas se almacenan en un array de JavaScript (`taskArray`) en memoria. Los cambios se perderán si recargas la página. Para persistencia, considera agregar:
- `localStorage` (almacenamiento local en el navegador)
- Una base de datos backend (Firebase, MongoDB, etc.)

## 🔧 Funciones Principales

### `app.js`
- `addTask()`: Crea una nueva tarea
- `completeTask(e)`: Cambia el estado de una tarea
- `deletedTask(e)`: Elimina una tarea
- `renderList(taskToShow)`: Renderiza tareas en el DOM
- `filterTask()`: Filtra tareas según criterios seleccionados
- `addPopUp()`: Genera el modal con detalles de la tarea
- `crearCategoria(e)`: Crea una nueva categoría
- `fillCategoryFilter()`: Agrega categoría al filtro

### `categoryTasks.js`
- `createTask()`: Almacena tarea en el array
- `addCategory()`: Valida y almacena categoría

## 🐛 Bugs Conocidos / Consideraciones

- Los datos se pierden al recargar la página (sin persistencia)
- El modal siempre tiene el id `myModal` (considerar IDs únicos por tarea)
- Sin validación de caracteres especiales en inputs

## 🚀 Mejoras Futuras

- [ ] Guardar datos en `localStorage` para persistencia
- [ ] Agregar fechas de vencimiento a las tareas
- [ ] Sistema de prioridades (Alta, Media, Baja)
- [ ] Búsqueda/filtro por texto
- [ ] Modo oscuro/claro
- [ ] Exportar tareas a PDF o JSON
- [ ] Animaciones de transición
- [ ] Validación más robusta de inputs
- [ ] Editar tareas existentes

## 📚 Lo que Aprendí en Este Proyecto

- Manipulación del DOM con JavaScript vanilla
- Event listeners y delegación de eventos
- Métodos de array (`filter`, `find`, `splice`, `forEach`)
- Uso de `dataset` para almacenar información en elementos HTML
- CSS Grid y Flexbox para diseño responsive
- Manejo de modales con CSS
- Estructura y organización de código en múltiples archivos

## 📝 Notas

Este es mi primer proyecto personal. Fue una excelente oportunidad para aprender JavaScript vanilla sin dependencias externas y practicar conceptos fundamentales de programación web.

---

**Última actualización**: Enero 2026
