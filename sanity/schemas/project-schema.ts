
const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'number',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt-text',
            type: 'string'
          },
        ],
      },
			{
				name: 'content',
				title: 'Content',
				type: 'text',
			},
			{
				name: 'pills',
				title: 'Pills',
				type: 'array',
				of: [{ type: 'string' }],
			},
			{
				name: 'links',
				title: 'Links',
				type: 'array',
				of: [
					{
						type: 'object',
						fields: [
							{
								name: 'title',
								title: 'Title',
								type: 'string',
							},
							{
								name: 'link',
								title: 'Link',
								type: 'string',
							},
						],
					},
				],
			}
			],
  };
  
  export default project;