# Guía de Eficiencia de Tokens y Reglas de Desarrollo (claude-token-efficient)
# Basado en https://github.com/drona23/claude-token-efficient

## Directrices de Eficiencia (Token Efficiency)
- Leer archivos antes de modificarlos; nunca editar a ciegas ni re-leer archivos sin cambios.
- Respuestas directas y concisas: código primero, explicaciones breves solo si no son evidentes.
- Sin introducciones o cierres aduladores ("You are right", "I have completed", etc.).
- Sin texto explicativo innecesario en outputs de agentes a menos que un humano lo requiera.
- Favorecer soluciones simples y directas (sin abstracciones prematuras ni sobreingeniería).
- Límite estricto de llamadas y ejecución precisa.

## Reglas de Codificación (Coding Profile)
- Retornar código directamente. Usar comentarios mínimos, solo en lógica compleja.
- Sin código de relleno (boilerplate) innecesario.
- Validar antes de marcar como completado.
- No asumir versiones o APIs; verificar en dependencias instaladas.

## Reglas para Agentes (Agents Profile)
- Salida estructurada y precisa.
- Ejecutar la tarea sin narrar cada paso interno en tiempo real.
- Si un paso falla: reportar qué falló, por qué y la acción tomada.
