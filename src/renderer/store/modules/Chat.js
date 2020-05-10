const state = {
  messages: [
    {
      sender: 'user',
      date: new Date(),
      content: {
        plainText: 'Доход 10-го отдела за текущий месяц'
      }
    },
    {
      sender: 'server',
      date: new Date(),
      content: {
        plainText: '2 938 223.82'
      }
    },
    {
      sender: 'user',
      date: new Date(),
      content: {
        plainText: 'Сколько сотрудников работает в 3-ем отделе?'
      }
    },
    {
      sender: 'server',
      date: new Date(),
      content: {
        plainText: '14'
      }
    },
    {
      sender: 'user',
      date: new Date(),
      content: {
        plainText: 'Средняя зарплата сотрудников, зарплата которых выше 30000'
      }
    },
    {
      sender: 'server',
      date: new Date(),
      content: {
        plainText: '42 729'
      }
    }
  ]
}


export default { state }
