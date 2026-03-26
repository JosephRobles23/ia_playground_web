import landingPageContentEs from "../../landing-page-content.es.json"

export const landingContent = landingPageContentEs

export const { meta, navegacion } = landingContent

/** Contenido por id de sección (shape definido en landing-page-content.es.json). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- unión de secciones heterogéneas desde JSON
export function getSectionContent(id: string): any {
  const section = landingContent.secciones.find((s) => s.id === id)
  return section?.contenido ?? null
}
