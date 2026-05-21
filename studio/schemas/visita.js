import { defineType, defineField } from 'sanity'

export const visitaIntro = defineType({
  name: 'visitaIntro',
  title: 'Intro visita (párrafo)',
  type: 'document',
  description: 'Párrafos de introducción de la página de visitas. Crear uno por párrafo, en orden.',
  fields: [
    defineField({
      name: 'es',
      title: 'Texto ES',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Texto EN',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: { title: 'es' },
    prepare({ title }) {
      return { title: title?.slice(0, 80) + (title?.length > 80 ? '…' : '') }
    },
  },
})

export const experiencia = defineType({
  name: 'experiencia',
  title: 'Experiencia de visita',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID (slug)',
      type: 'slug',
      options: { source: 'titulo.es', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'num',
      title: 'Número (ej: 01)',
      type: 'string',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'ES' },
        { name: 'en', type: 'string', title: 'EN' },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'ES', rows: 4 },
        { name: 'en', type: 'text', title: 'EN', rows: 4 },
      ],
    }),
    defineField({
      name: 'detalles',
      title: 'Detalles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'detalle',
          fields: [
            { name: 'es', type: 'string', title: 'ES' },
            { name: 'en', type: 'string', title: 'EN' },
          ],
          preview: { select: { title: 'es' } },
        },
      ],
    }),
    defineField({
      name: 'precio',
      title: 'Precio (€)',
      type: 'number',
    }),
    defineField({
      name: 'href',
      title: 'Enlace reserva',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Orden (menor número = primero)',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'titulo.es',
      subtitle: 'num',
    },
  },
})
