import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Post de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (ID de URL)',
      type: 'slug',
      options: { source: 'title.es', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'ES' },
        { name: 'en', type: 'string', title: 'EN' },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cat',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Prensa',      value: 'blog.cat.prensa'     },
          { title: 'Enoturismo',  value: 'blog.cat.enoturismo' },
          { title: 'Vinos',       value: 'blog.cat.vinos'      },
          { title: 'Bodega',      value: 'blog.cat.bodega'     },
          { title: 'Información', value: 'blog.cat.info'       },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tiempo de lectura (opcional)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'ES (ej: 3 min de lectura)' },
        { name: 'en', type: 'string', title: 'EN (ej: 3 min read)'       },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen (para la tarjeta)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'ES', rows: 3 },
        { name: 'en', type: 'text', title: 'EN', rows: 3 },
      ],
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'href',
      title: 'Enlace externo (artículo original)',
      type: 'url',
      description: 'URL de la publicación original. Si existe y no hay contenido interno, la tarjeta enlazará aquí.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'content',
      title: 'Contenido (bloques)',
      description: 'Si se rellena, el post tendrá página interna en /blog/:id.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'blogBlock',
          title: 'Bloque',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Tipo',
              options: {
                list: [
                  { title: 'Intro',          value: 'intro'  },
                  { title: 'Párrafo',        value: 'p'      },
                  { title: 'Título (h2)',    value: 'h2'     },
                  { title: 'Imagen',         value: 'image'  },
                  { title: 'Vídeo (YouTube)', value: 'video' },
                  { title: 'Lista',          value: 'list'   },
                ],
              },
            },
            {
              name: 'es',
              type: 'text',
              title: 'Texto ES',
              rows: 4,
              hidden: ({ parent }) => ['image', 'video', 'list'].includes(parent?.type),
            },
            {
              name: 'en',
              type: 'text',
              title: 'Texto EN',
              rows: 4,
              hidden: ({ parent }) => ['image', 'video', 'list'].includes(parent?.type),
            },
            {
              name: 'src',
              type: 'url',
              title: 'URL (imagen o YouTube)',
              hidden: ({ parent }) => !['image', 'video'].includes(parent?.type),
            },
            {
              name: 'caption',
              type: 'object',
              title: 'Pie de foto / vídeo',
              hidden: ({ parent }) => !['image', 'video'].includes(parent?.type),
              fields: [
                { name: 'es', type: 'string', title: 'ES' },
                { name: 'en', type: 'string', title: 'EN' },
              ],
            },
            {
              name: 'items',
              type: 'array',
              title: 'Ítems',
              hidden: ({ parent }) => parent?.type !== 'list',
              of: [
                {
                  type: 'object',
                  name: 'listItem',
                  fields: [
                    { name: 'es', type: 'string', title: 'ES' },
                    { name: 'en', type: 'string', title: 'EN' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: 'type', subtitle: 'es' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'date',
      media: 'imagen',
    },
  },
})
