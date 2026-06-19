import { defineType, defineField } from 'sanity'

export const committeeTopicsDocument = defineType({
  name: 'committeeTopicsDocument',
  title: 'Committee Topics',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Committee Topics PDF',
      type: 'file',
      description: 'Upload the committee topics PDF here. Once uploaded, it will appear as a download link on the MUN 2027 page.',
      options: { accept: 'application/pdf' },
    }),
  ],
  preview: {
    select: { hasFile: 'file.asset' },
    prepare: ({ hasFile }) => ({
      title: 'Committee Topics PDF',
      subtitle: hasFile ? 'PDF uploaded' : 'No file uploaded yet',
    }),
  },
})
