import React from 'react';
import { Cpu, HardDrive, Zap, Monitor, Shield, Settings, BarChart3, CheckCircle, AlertTriangle, Info, Printer } from 'lucide-react';

function App() {
  // Function to handle print functionality
  // Opens the browser's native print dialog with optimized print styles
  const handlePrint = () => {
    window.print();
  };

  return (
    // Main container with full viewport height, dark background, cyan text, and monospace font
    <div className="min-h-screen bg-gray-900 text-cyan-100 font-mono">
      {/* Header section with institutional information and project title */}
      <header className="bg-black border-b-2 border-cyan-400 p-6">
        {/* Container with max width and center alignment */}
        <div className="max-w-6xl mx-auto">
          {/* Institutional Header with course and student information */}
          <div className="mb-6 space-y-3">
            {/* Institution name with centered alignment and cyan highlighting */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-cyan-400 tracking-wider">CORPORACIÓN UNIFICADA NACIONAL</h2>
            </div>
            
            {/* Two-column grid for course and student information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              {/* Left column: Course and instructor information */}
              <div className="bg-gray-900 border border-cyan-600 rounded p-3">
                <div className="space-y-2">
                  {/* Course name with cyan label and green value */}
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">CURSO:</span>
                    <span className="text-green-400">Arquitectura y mantenimiento de computadores</span>
                  </div>
                  {/* Instructor name with animated fade effect */}
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">DOCENTE:</span>
                    <span className="text-purple-400 animate-fade-gradient">OSCAR DANIEL CARRERO ROMERO</span>
                  </div>
                </div>
              </div>
              
              {/* Right column: Student information */}
              <div className="bg-gray-900 border border-purple-600 rounded p-3">
                <div className="space-y-2">
                  {/* Student name with animated fade effect */}
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-mono">ESTUDIANTE/DEV:</span>
                    <span className="text-green-400 animate-fade-gradient">GABRIEL RODRIGUEZ</span>
                  </div>
                  {/* Student ID number */}
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-mono">FICHA:</span>
                    <span className="text-cyan-400">53385</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main report title and description */}
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">SISTEMA TÉCNICO - INFORME DE ENSAMBLAJE</h1>
          <p className="text-green-400">Documentación Completa de Ensamblaje y Mantenimiento Preventivo</p>
          {/* Status badges showing report information */}
          <div className="flex items-center gap-4 mt-3 text-sm">
            <span className="bg-cyan-900 px-3 py-1 rounded border border-cyan-400">STATUS: ACTIVO</span>
            <span className="bg-purple-900 px-3 py-1 rounded border border-purple-400">VERSIÓN: 1.0</span>
            <span className="bg-green-900 px-3 py-1 rounded border border-green-400">FECHA: 2025</span>
          </div>
        </div>
      </header>

      {/* Main content area with centered container and vertical spacing */}
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Table of Contents section with navigation overview */}
        <section className="bg-gray-800 border border-cyan-400 rounded-lg p-6">
          {/* Section header with info icon */}
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" />
            TABLA DE CONTENIDOS
          </h2>
          {/* Two-column grid layout for content organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column: First three sections */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">01.</span> Investigación y Planificación
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">02.</span> Selección de Componentes
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">03.</span> Documentación del Ensamblaje
              </div>
            </div>
            {/* Right column: Last three sections */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">04.</span> Plan de Mantenimiento Preventivo
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">05.</span> Evaluación de Desempeño
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan-400">06.</span> Conclusiones y Recomendaciones
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Research and Planning - Client analysis and requirements */}
        <section className="bg-gray-800 border border-purple-400 rounded-lg p-6">
          {/* Section header with settings icon and purple theme */}
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            01. INVESTIGACIÓN Y PLANIFICACIÓN DEL ENSAMBLAJE
          </h2>
          
          <div className="space-y-6">
            {/* Client profile subsection */}
            <div className="bg-gray-700 border border-purple-300 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Perfil del Cliente</h3>
              {/* Client information container with dark background */}
              <div className="bg-gray-900 p-4 rounded border border-gray-600">
                {/* Client details with cyan labels and cyan values */}
                <p className="text-cyan-100 mb-2"><span className="text-cyan-400">Cliente:</span> Empresa Pequeña - Oficina de Diseño Gráfico</p>
                <p className="text-cyan-100 mb-2"><span className="text-cyan-400">Usuarios:</span> 5-10 diseñadores gráficos</p>
                <p className="text-cyan-100 mb-2"><span className="text-cyan-400">Uso Principal:</span> Adobe Creative Suite, renderizado 3D, edición de video</p>
                <p className="text-cyan-100"><span className="text-cyan-400">Presupuesto:</span> $1,200 - $1,800 USD por equipo</p>
              </div>
            </div>

            {/* Requirements analysis subsection */}
            <div className="bg-gray-700 border border-purple-300 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Análisis de Requerimientos</h3>
              {/* Two-column grid for technical and special requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Technical requirements with checkmark icons */}
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <h4 className="text-green-400 font-semibold mb-2">Requerimientos Técnicos</h4>
                  <ul className="space-y-1 text-sm">
                    {/* Each requirement item with green checkmark icon */}
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Alto rendimiento en aplicaciones gráficas</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Mínimo 32GB RAM</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Tarjeta gráfica dedicada</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Almacenamiento rápido (SSD)</li>
                  </ul>
                </div>
                {/* Special considerations with checkmark icons */}
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <h4 className="text-green-400 font-semibold mb-2">Consideraciones Especiales</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Operación silenciosa</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Expansibilidad futura</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Eficiencia energética</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Soporte técnico confiable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Component Selection - Hardware specifications and justifications */}
        <section className="bg-gray-800 border border-green-400 rounded-lg p-6">
          {/* Section header with CPU icon and green theme */}
          <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            02. SELECCIÓN DE COMPONENTES
          </h2>
          
          <div className="space-y-6">
            {/* Component grid layout - 2 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Processor component card */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                {/* Component header with CPU icon */}
                <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Procesador
                </h3>
                {/* Component specifications container */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  {/* Component name in cyan */}
                  <p className="text-cyan-400 font-semibold">AMD Ryzen 7 5800X</p>
                  {/* Technical specifications in gray */}
                  <p className="text-sm text-gray-300 mt-1">8 núcleos, 16 hilos, 3.8GHz base / 4.7GHz boost</p>
                  {/* Justification text in green */}
                  <p className="text-green-400 text-sm mt-2">Justificación: Excelente rendimiento en aplicaciones multihilo como renderizado y edición de video, con eficiencia energética superior.</p>
                </div>
              </div>

              {/* Motherboard component card */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Tarjeta Madre</h3>
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <p className="text-cyan-400 font-semibold">MSI MAG X570 TOMAHAWK WIFI</p>
                  <p className="text-sm text-gray-300 mt-1">Socket AM4, PCIe 4.0, WiFi 6</p>
                  <p className="text-green-400 text-sm mt-2">Justificación: Soporte completo para componentes de alta gama, conectividad moderna y expansibilidad futura.</p>
                </div>
              </div>

              {/* RAM component card */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Memoria RAM</h3>
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <p className="text-cyan-400 font-semibold">Corsair Vengeance LPX 32GB (2x16GB)</p>
                  <p className="text-sm text-gray-300 mt-1">DDR4-3200, CL16, Low Profile</p>
                  <p className="text-green-400 text-sm mt-2">Justificación: Capacidad óptima para aplicaciones gráficas profesionales, velocidad equilibrada y compatibilidad garantizada.</p>
                </div>
              </div>

              {/* Storage component card with HDD icon */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                  <HardDrive className="w-4 h-4" />
                  Almacenamiento
                </h3>
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <p className="text-cyan-400 font-semibold">Samsung 980 PRO 1TB NVMe SSD</p>
                  <p className="text-sm text-gray-300 mt-1">PCIe 4.0, 7,000 MB/s lectura</p>
                  <p className="text-green-400 text-sm mt-2">Justificación: Velocidad excepcional para carga rápida de archivos grandes y aplicaciones, esencial para flujos de trabajo profesionales.</p>
                </div>
              </div>

              {/* Graphics card component with monitor icon */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Tarjeta Gráfica
                </h3>
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <p className="text-cyan-400 font-semibold">NVIDIA RTX 4060 Ti 16GB</p>
                  <p className="text-sm text-gray-300 mt-1">Ada Lovelace, RT Cores, Tensor Cores</p>
                  <p className="text-green-400 text-sm mt-2">Justificación: Aceleración GPU para Creative Suite, ray tracing para 3D, y suficiente VRAM para proyectos complejos.</p>
                </div>
              </div>

              {/* Power supply component with power icon */}
              <div className="bg-gray-700 border border-green-300 rounded p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Fuente de Poder
                </h3>
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <p className="text-cyan-400 font-semibold">Seasonic Focus GX-750W</p>
                  <p className="text-sm text-gray-300 mt-1">80+ Gold, Modular, 10 años garantía</p>
                  <p className="text-green-400 text-sm mt-2">Justificación: Eficiencia energética premium, operación silenciosa y capacidad suficiente para futuras expansiones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Assembly Documentation - Step-by-step assembly process */}
        <section className="bg-gray-800 border border-cyan-400 rounded-lg p-6">
          {/* Section header with settings icon and cyan theme */}
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            03. DOCUMENTACIÓN DEL ENSAMBLAJE
          </h2>
          
          <div className="space-y-6">
            {/* Safety measures subsection */}
            <div className="bg-gray-700 border border-cyan-300 rounded p-4">
              {/* Subsection header with shield icon */}
              <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Medidas de Seguridad
              </h3>
              {/* Two-column grid for safety categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Environment preparation checklist */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-yellow-400 font-semibold mb-2">Preparación del Entorno</h4>
                  <ul className="space-y-1 text-sm">
                    {/* Each safety item with green checkmark */}
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Área de trabajo limpia y organizada</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Iluminación adecuada</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Herramientas apropiadas disponibles</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Pulsera antiestática</li>
                  </ul>
                </div>
                {/* ESD protection checklist */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-yellow-400 font-semibold mb-2">Protección ESD</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Descarga estática previa</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Uso de pulsera antiestática</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Superficie de trabajo apropiada</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" />Manipulación correcta de componentes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Assembly process subsection */}
            <div className="bg-gray-700 border border-cyan-300 rounded p-4">
              <h3 className="text-lg font-semibold text-cyan-300 mb-3">Proceso de Ensamblaje</h3>
              <div className="space-y-4">
                {/* Step 1: Motherboard preparation */}
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <h4 className="text-green-400 font-semibold mb-2">Paso 1: Preparación de la Tarjeta Madre</h4>
                  <p className="text-sm text-gray-300 mb-2">Instalación del procesador, memoria RAM y cooler CPU fuera del case para facilitar el acceso.</p>
                  {/* Important note with cyan highlighting */}
                  <div className="bg-gray-800 p-2 rounded text-xs text-cyan-400">
                    NOTA: Verificar orientación del procesador antes de la instalación. No aplicar fuerza excesiva.
                  </div>
                </div>

                {/* Step 2: Case installation */}
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <h4 className="text-green-400 font-semibold mb-2">Paso 2: Instalación en el Case</h4>
                  <p className="text-sm text-gray-300 mb-2">Montaje de la tarjeta madre en el case, instalación de la fuente de poder y conexiones principales.</p>
                  <div className="bg-gray-800 p-2 rounded text-xs text-cyan-400">
                    NOTA: Asegurar correcta alineación con los standoffs y conexiones de panel frontal.
                  </div>
                </div>

                {/* Step 3: Expansion components */}
                <div className="bg-gray-900 p-4 rounded border border-gray-600">
                  <h4 className="text-green-400 font-semibold mb-2">Paso 3: Componentes de Expansión</h4>
                  <p className="text-sm text-gray-300 mb-2">Instalación de tarjeta gráfica, dispositivos de almacenamiento y verificación de todas las conexiones.</p>
                  <div className="bg-gray-800 p-2 rounded text-xs text-cyan-400">
                    NOTA: Verificar compatibilidad física y conexiones de alimentación antes del primer encendido.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Preventive Maintenance Plan - Scheduled maintenance procedures */}
        <section className="bg-gray-800 border border-yellow-400 rounded-lg p-6">
          {/* Section header with settings icon and yellow theme */}
          <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            04. PLAN DE MANTENIMIENTO PREVENTIVO
          </h2>
          
          <div className="space-y-6">
            {/* Three-column grid for maintenance schedules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Monthly maintenance tasks */}
              <div className="bg-gray-700 border border-yellow-300 rounded p-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">Mantenimiento Mensual</h3>
                <div className="space-y-2 text-sm">
                  {/* Each maintenance task with green checkmark */}
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Limpieza externa del case</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Verificación de temperaturas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Actualización de software</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Respaldo de datos críticos</span>
                  </div>
                </div>
              </div>

              {/* Quarterly maintenance tasks */}
              <div className="bg-gray-700 border border-yellow-300 rounded p-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">Mantenimiento Trimestral</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Limpieza interna profunda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Verificación de ventiladores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Análisis de rendimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Actualización de drivers</span>
                  </div>
                </div>
              </div>

              {/* Annual maintenance tasks */}
              <div className="bg-gray-700 border border-yellow-300 rounded p-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">Mantenimiento Anual</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Renovación pasta térmica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Revisión completa de hardware</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Optimización del sistema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>Planificación de upgrades</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools and procedures subsection */}
            <div className="bg-gray-700 border border-yellow-300 rounded p-4">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">Herramientas y Procedimientos</h3>
              {/* Two-column grid for tools and safety procedures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Required tools list */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-cyan-400 font-semibold mb-2">Herramientas Requeridas</h4>
                  <ul className="space-y-1 text-sm">
                    {/* Tool list items with bullet points */}
                    <li>• Aire comprimido para limpieza</li>
                    <li>• Destornilladores de precisión</li>
                    <li>• Pasta térmica de calidad</li>
                    <li>• Software de monitoreo (HWiNFO64)</li>
                    <li>• Herramientas de benchmarking</li>
                  </ul>
                </div>
                {/* Safety procedures list */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-cyan-400 font-semibold mb-2">Procedimientos de Seguridad</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Apagar y desconectar el sistema</li>
                    <li>• Usar equipo antiestático</li>
                    <li>• Documentar cambios realizados</li>
                    <li>• Verificar funcionamiento post-mantenimiento</li>
                    <li>• Mantener registro de mantenimientos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Performance Evaluation - Benchmarks and system metrics */}
        <section className="bg-gray-800 border border-purple-400 rounded-lg p-6">
          {/* Section header with bar chart icon and purple theme */}
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            05. EVALUACIÓN DE DESEMPEÑO
          </h2>
          
          <div className="space-y-6">
            {/* Two-column grid for performance metrics and application analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Performance metrics column */}
              <div className="bg-gray-700 border border-purple-300 rounded p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Métricas de Rendimiento</h3>
                <div className="space-y-4">
                  {/* CPU performance metrics */}
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <h4 className="text-green-400 font-semibold mb-2">CPU Performance</h4>
                    <div className="space-y-1 text-sm">
                      {/* Benchmark scores and temperatures with color coding */}
                      <div className="flex justify-between">
                        <span>Cinebench R23:</span>
                        <span className="text-cyan-400">22,500 puntos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperatura idle:</span>
                        {/* Green color for good idle temperature */}
                        <span className="text-green-400">35°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperatura carga:</span>
                        {/* Yellow color for acceptable load temperature */}
                        <span className="text-yellow-400">72°C</span>
                      </div>
                    </div>
                  </div>

                  {/* GPU performance metrics */}
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <h4 className="text-green-400 font-semibold mb-2">GPU Performance</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>3DMark Time Spy:</span>
                        <span className="text-cyan-400">13,800 puntos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperatura idle:</span>
                        <span className="text-green-400">30°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperatura carga:</span>
                        <span className="text-yellow-400">68°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application analysis column */}
              <div className="bg-gray-700 border border-purple-300 rounded p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Análisis de Aplicaciones</h3>
                <div className="space-y-4">
                  {/* Adobe Creative Suite performance */}
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <h4 className="text-green-400 font-semibold mb-2">Adobe Creative Suite</h4>
                    <div className="space-y-1 text-sm">
                      {/* Application performance ratings with green color for good performance */}
                      <div className="flex justify-between">
                        <span>Photoshop CC:</span>
                        <span className="text-green-400">Excelente</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premiere Pro:</span>
                        <span className="text-green-400">Muy bueno</span>
                      </div>
                      <div className="flex justify-between">
                        <span>After Effects:</span>
                        <span className="text-green-400">Bueno</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D applications performance */}
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <h4 className="text-green-400 font-semibold mb-2">Aplicaciones 3D</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Blender:</span>
                        <span className="text-green-400">Excelente</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cinema 4D:</span>
                        <span className="text-green-400">Muy bueno</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maya:</span>
                        <span className="text-green-400">Bueno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-maintenance results subsection */}
            <div className="bg-gray-700 border border-purple-300 rounded p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Resultados Post-Mantenimiento</h3>
              {/* Three-column grid for maintenance results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Performance improvements */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-cyan-400 font-semibold mb-2">Mejoras de Rendimiento</h4>
                  <ul className="space-y-1 text-sm">
                    {/* Improvement metrics with green checkmarks */}
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Reducción 8°C en temperaturas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Mejora 12% en benchmarks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Reducción ruido 15dB</span>
                    </li>
                  </ul>
                </div>

                {/* System stability improvements */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-cyan-400 font-semibold mb-2">Estabilidad del Sistema</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>0 cuelgues en 30 días</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Tiempo de arranque: 18s</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Consumo optimizado 8%</span>
                    </li>
                  </ul>
                </div>

                {/* Problem prevention benefits */}
                <div className="bg-gray-900 p-3 rounded border border-gray-600">
                  <h4 className="text-cyan-400 font-semibold mb-2">Prevención de Problemas</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Detección temprana de fallas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Extensión vida útil 25%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>Reducción downtimes 90%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Conclusions and Recommendations - Project summary and future recommendations */}
        <section className="bg-gray-800 border border-cyan-400 rounded-lg p-6">
          {/* Section header with checkmark icon and cyan theme */}
          <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            06. CONCLUSIONES Y RECOMENDACIONES
          </h2>
          
          <div className="space-y-6">
            {/* Two-column grid for results and recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project results column */}
              <div className="bg-gray-700 border border-cyan-300 rounded p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Resultados Obtenidos</h3>
                <div className="space-y-3">
                  {/* Result summary paragraphs */}
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <p className="text-sm text-gray-300">
                      El sistema ensamblado cumple y supera las expectativas del cliente, proporcionando rendimiento excepcional 
                      para aplicaciones gráficas profesionales con eficiencia energética y operación silenciosa.
                    </p>
                  </div>
                  <div className="bg-gray-900 p-3 rounded border border-gray-600">
                    <p className="text-sm text-gray-300">
                      La implementación del plan de mantenimiento preventivo ha resultado en mejoras significativas de rendimiento 
                      y estabilidad, con una reducción notable en problemas operacionales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations column */}
              <div className="bg-gray-700 border border-cyan-300 rounded p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Recomendaciones</h3>
                <div className="space-y-2 text-sm">
                  {/* Recommendation items with warning triangle icons */}
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span>Seguir estrictamente el cronograma de mantenimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span>Capacitar al personal en procedimientos básicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span>Considerar upgrade de RAM a 64GB en 2 años</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span>Monitorear regularmente temperaturas y rendimiento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                    <span>Implementar sistema de respaldo automático</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final evaluation subsection */}
            <div className="bg-gray-700 border border-cyan-300 rounded p-4">
              <h3 className="text-lg font-semibold text-cyan-300 mb-3">Valoración Final</h3>
              {/* Final project assessment */}
              <div className="bg-gray-900 p-4 rounded border border-gray-600">
                {/* Success status in green */}
                <p className="text-green-400 font-semibold mb-2">PROYECTO COMPLETADO EXITOSAMENTE</p>
                {/* Final summary paragraph */}
                <p className="text-sm text-gray-300">
                  La solución implementada satisface completamente los requerimientos del cliente, proporcionando una 
                  plataforma robusta y eficiente para operaciones de diseño gráfico profesional. El plan de mantenimiento 
                  preventivo garantiza operación óptima a largo plazo con minimización de riesgos y maximización de la inversión.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer section with copyright and status badges */}
      <footer className="bg-black border-t-2 border-cyan-400 p-6 mt-8">
        {/* Footer container with max width and center alignment */}
        <div className="max-w-6xl mx-auto">
          {/* Responsive flex layout for footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright information */}
            <div className="text-cyan-400 font-semibold">
              SISTEMA TÉCNICO © 2025
            </div>
            {/* Status badges and print button container */}
            <div className="flex gap-4 mt-3 md:mt-0">
              {/* Report status badges */}
              <span className="bg-green-900 px-3 py-1 rounded border border-green-400 text-green-400">INFORME COMPLETO</span>
              <span className="bg-cyan-900 px-3 py-1 rounded border border-cyan-400 text-cyan-400">VALIDADO</span>
              {/* Print button with printer icon and BIOS styling */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-purple-900 hover:bg-purple-800 border border-purple-400 hover:border-purple-300 px-3 py-1 rounded transition-all duration-200 text-purple-400 hover:text-purple-300 print:hidden"
              >
                <Printer className="w-4 h-4" />
                <span className="font-mono text-sm">IMPRIMIR</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export the main App component as default
export default App;