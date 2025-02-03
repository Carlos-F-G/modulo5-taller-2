# Hospital Nueva Vida - Proyecto ReactJS

Para esta evaluación modeulo 4 taller 3, seguimos trabajando en el proyecto Hospital Nueva Vida, desarrollado con ReactJS. Este simula el funcionamiento básico de un sistema de gestión hospitalaria. Incluye un listado dinámico de doctores con filtro por especialidad, una lista de servicios destacados, y un formulario interactivo para agendar citas con validaciones. Además, se implementaron componentes reutilizables, una interfaz profesional y responsiva, y una gestión de estado eficiente con Context API.

## Funcionalidades Implementadas

1. **Ruteo y Vistas Principales**

   - Home: Muestra servicios destacados.
   - Equipo Médico: Lista de doctores con filtro por especialidad.
   - Citas: Formulario para agendar citas y lista de citas agendadas.

2. **Gestión de Estado Global**

   - Uso de Context API para manejar:
     - Lista de servicios.
     - Lista de doctores.
     - Citas agendadas.

3. **Componentes Dinámicos**

   - ServiceList: Renderiza servicios desde el contexto.
   - DoctorList: Filtra y muestra la lista de doctores.
   - AppointmentForm: Formulario para agendar citas con validaciones.
   - AppointmentList: Muestra las citas agendadas.

4. **Validaciones y Optimización**

   - Validación de props con PropTypes.
   - Manejo de fechas válidas en el formulario de citas.
   - Optimización del DOM Virtual con React.Fragment.
   - Uso de React Profiler para análisis de rendimiento.

5. \*\* Tecnologías Utilizadas

- React
- React Router DOM
- Context API
- Material-UI
- PropTypes
- Vite

\*\*Carlos Farias Galdames
