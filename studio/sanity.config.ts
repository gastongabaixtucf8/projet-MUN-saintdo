import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MUN Saint Dominique — Admin',
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET ?? 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Gallery Photos')
              .schemaType('galleryPhoto')
              .child(S.documentTypeList('galleryPhoto').title('Gallery Photos')),
            S.listItem()
              .title('Organising Committee')
              .schemaType('committeeMember')
              .child(
                S.documentTypeList('committeeMember')
                  .title('Organising Committee')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }]),
              ),
            S.listItem()
              .title('Programme PDF')
              .id('programme-singleton')
              .child(
                S.document()
                  .schemaType('programDocument')
                  .documentId('programme-singleton')
                  .title('Programme PDF'),
              ),
            S.listItem()
              .title('Committee Topics PDF')
              .id('committee-topics-singleton')
              .child(
                S.document()
                  .schemaType('committeeTopicsDocument')
                  .documentId('committee-topics-singleton')
                  .title('Committee Topics PDF'),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    // Singletons must never be deleted (deleting them leaves the Studio in a
    // stuck "read-only" state). Allow editing the file, but not delete/duplicate.
    actions: (prev, context) =>
      ['programDocument', 'committeeTopicsDocument'].includes(context.schemaType)
        ? prev.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : prev,
  },
})
