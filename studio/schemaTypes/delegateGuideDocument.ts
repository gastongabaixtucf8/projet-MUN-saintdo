import { defineType, defineField } from 'sanity'

export const delegateGuideDocument = defineType({
  name: 'delegateGuideDocument',
  title: 'Delegate Guide',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Delegate Guide PDF',
      type: 'file',
      description: 'Upload the Delegate Guide PDF here. Once uploaded, it replaces the default guide as the download link on the MUN 2027 page.',
      options: { accept: 'application/pdf' },
    }),
  ],
  preview: {
    select: { hasFile: 'file.asset' },
    prepare: ({ hasFile }) => ({
      title: 'Delegate Guide PDF',
      subtitle: hasFile ? 'PDF uploaded' : 'Using the default guide',
    }),
  },
})
