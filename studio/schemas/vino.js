import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'vino',
  title: 'Vino',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ID de URL)',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'ES' },
        { name: 'en', type: 'string', title: 'EN' },
      ],
    }),
    defineField({
      name: 'varietal',
      title: 'Varietal',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'ES' },
        { name: 'en', type: 'string', title: 'EN' },
      ],
    }),
    defineField({
      name: 'precio',
      title: 'Precio (ej: 14,00)',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Enlace tienda (WooCommerce)',
      type: 'url',
    }),
    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Destacado en Home',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden (menor número = primero)',
      type: 'number',
      initialValue: 99,
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'ES', rows: 5 },
        { name: 'en', type: 'text', title: 'EN', rows: 5 },
      ],
    }),
    defineField({
      name: 'cata',
      title: 'Notas de cata',
      type: 'object',
      fields: [
        {
          name: 'visual',
          title: 'Visual',
          type: 'object',
          fields: [
            { name: 'es', type: 'text', title: 'ES', rows: 2 },
            { name: 'en', type: 'text', title: 'EN', rows: 2 },
          ],
        },
        {
          name: 'olfativa',
          title: 'Olfativa',
          type: 'object',
          fields: [
            { name: 'es', type: 'text', title: 'ES', rows: 3 },
            { name: 'en', type: 'text', title: 'EN', rows: 3 },
          ],
        },
        {
          name: 'gustativa',
          title: 'Gustativa',
          type: 'object',
          fields: [
            { name: 'es', type: 'text', title: 'ES', rows: 3 },
            { name: 'en', type: 'text', title: 'EN', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'analitica',
      title: 'Analítica',
      type: 'object',
      fields: [
        { name: 'grado',         type: 'string', title: 'Grado alcohólico' },
        { name: 'ph',            type: 'string', title: 'pH' },
        { name: 'acidezTotal',   type: 'string', title: 'Acidez total' },
        { name: 'acidezVolatil', type: 'string', title: 'Acidez volátil' },
        { name: 'azucar',        type: 'string', title: 'Azúcar residual' },
        { name: 'so2',           type: 'string', title: 'SO₂ libre' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'tag.es',
      media: 'imagen',
    },
  },
})
