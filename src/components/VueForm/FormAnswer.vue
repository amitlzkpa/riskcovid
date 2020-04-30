<template>
  <div class="vue-form__answer">

    <div v-if="question.type.includes('select')" style="width:100%">
      <answer-button
          v-for="answer in question.answers"
          :key="answer.answer"
          :keyboard="answer.key || null"
          :selected="currentAnswer && answer.answer === currentAnswer.answer"
          @click="selectAnswer(answer)"
        >{{ answer.answer }}
      </answer-button>
    </div>

    <div v-else>
      <answer-input
          :type="question.type"
          @input="selectAnswer"
          :value="currentAnswer"
      ></answer-input>
    </div>

    <form-button @click="answer" v-if="showOKButton" class="action-button">OK
      <small>[Enter]</small>
    </form-button>

    <form-button @click="submit" v-if="showSubmitButton" class="action-button">Submit</form-button>
    
  </div>
</template>

<script>
  import AnswerButton from "./FormAnswerButton";
  import AnswerInput from "./FormAnswerInput";
  import FormButton from "./FormButton";

  export default {
    data() {
      return {
        currentAnswer: null // Answer obj
      };
    },
    props: {
      question: Object
    },
    components: {
      AnswerButton,
      AnswerInput,
      FormButton
    },
    computed: {
      showOKButton() {
        if (!this.currentAnswer) return false;

        if (this.question.type.includes("single-select")) {
          return this.question.answers && this.question.answers.length > 0;
        }

        if (this.question.type === "text" && this.question.minLength) {
          return this.currentAnswer.length >= this.question.minLength;
        }

        if (this.question.type === "email") {
          // eslint-disable-next-line
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              this.currentAnswer
          );
        }

        return true;
      },

      showSubmitButton() {
        return this.question.type === "submit";
      }
    },
    methods: {
      answer() {
        this.$emit("answer", {
          question: this.question,
          answer: this.currentAnswer
        });

        this.currentAnswer = null;
      },

      submit() {
        this.$emit('submit');
      },

      selectAnswer(answer) {
        this.currentAnswer = answer;
      },

      enterListener(e) {
        // Enter key === 13
        if (e.which !== 13) return;

        if (this.showOKButton) {
          this.answer();
        }

        if (this.showSubmitButton) {
          this.submit();
        }
      }
    },
    created() {
      window.addEventListener('keyup', this.enterListener);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.enterListener);
    }
  };
</script>

<style lang="scss" scoped>
  .vue-form__answer {
    display: flex;
    flex-direction: column;
    align-items: start;

    .action-button {
      margin-top: 2rem;
    }
  }
</style>
