module.exports = {
    // format_time: (date) => {
    //   return date.toLocaleTimeString();
    // },
    // format_date: (date) => {
    //   return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
    //     new Date(date).getFullYear() + 5
    //   }`;
    // },
    answer_handler: (answer, choice) => {
      if (answer == choice) {
        console.log(`correct!`);
      }
      else {
        console.log(`wrong!`)
      }
    },
};
  