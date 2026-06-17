import { defineType, defineField } from 'sanity'

export const programDocument = defineType({
  name: 'programDocument',
  title: 'Programme PDF',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Programme PDF',
      type: 'file',
      description: 'Upload the conference programme PDF here. Once uploaded, it will appear as a download link on the MUN 2027 page.',
      options: { accept: 'application/pdf' },
    }),
  ],
})
