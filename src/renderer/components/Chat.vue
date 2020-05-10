<template lang="pug">
  .chat
    .messages-block
      .messages-wrapper
        .message-block(v-for="m in messages")
          .message(:class="m.sender == 'user' ? 'user-message' : 'server-message'")
            .message-date {{ displayDate(m.date) }}
            br
            .message-content
              .message-plain-text(v-if="m.content.plainText") {{ m.content.plainText }}
      //- .message.user-message
      //-   .message-date 20.03.2020 20:20
      //-   //- <br>
      //-   .message-content
      //-     .message-plain-text Доход за текущий месяц
      //- .message.server-message
      //-   .message-date 20.03.2020 20:20
      //-   .message-content
      //-     .message-plain-text 2 938 223.82 р.

    .input-block
      .input-group
        textarea.user-input(rows="1" placeholder="Запрос" v-on:keyup="textareaInput($event)" v-model="input")
        span.input-icon.active-icon.tooltip-left(data-tooltip="Отправить (Enter)")
          i.far.fa-paper-plane
</template>

<script>
  import moment from 'moment'

  async function POST (url, data) {
    const rawResponse = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // console.log(JSON.stringify(data))
    const result = await rawResponse.json()
    return result
  }

  ;(async function () {
    console.log('before')
    const result = await POST('http://localhost:8000/test', {
      ID: 1729,
      message: 'СОСИ ХУЙ, ГРЯЗНЫЙ ПИДОРАС!',
      bitches: ['Joe mama', 'bebe']
    })
    console.log(result)
    console.log('after')
  }())

  // moment.locale('ru')

  export default {
    name: 'chat',
    data () {
      return {
        input: '',
        messages: this.$store.state.Chat.messages
      }
    },
    methods: {
      displayDate (date) {
        return moment(date).format('DD.MM.YYYY, HH:mm:ss')
      },
      textareaInput (e) {
        if (e.key === 'Enter') {
          if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
            this.messages.push({
              sender: 'user',
              date: new Date(),
              content: {
                plainText: this.input
              }
            })
            this.input = ''
          }
        }
      }
    }
  }
</script>
