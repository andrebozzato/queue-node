export default {
  key: 'UserReport',
  options: {
    delay: 5000,
    repeat: {
      cron: '5 * * * * *'
    }
  },
  async handle({ data }) {
    const { user } = data
    const hour = new Date()

    console.log(user, hour)
  }
}
