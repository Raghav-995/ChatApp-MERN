const data = [
    {
      id: 1,
      name: 'Category 1',
      items: [
        {
          id: 101,
          itemName: 'Item 1',
          subItems: [
            { id: 1001, subItemName: 'SubItem 1' },
            { id: 1002, subItemName: 'SubItem 2' }
          ]
        },
        {
          id: 102,
          itemName: 'Item 2',
          subItems: [
            { id: 1003, subItemName: 'SubItem 3' },
            { id: 1004, subItemName: 'SubItem 4' }
          ]
        }
      ]
    },
    // More categories...
  ];
module.exports = data;