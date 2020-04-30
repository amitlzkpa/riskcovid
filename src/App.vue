<template>
  <div id="app">
    <vue-form :data="formData" @complete="complete"></vue-form>
  </div>
</template>

<script>
import VueForm from "@/components/VueForm";
import data from "@/data/covid-demo";

const rawData = data;

export default {
  data() {
    return {
      formData: data
    };
  },
  components: {
    VueForm
  },
  methods: {
    complete(data) {
      
      
      
      var j = JSON.parse(JSON.stringify(data))
      var input_params = {};
      
      

      input_params.age = j.filter(i => i.key === "age")[0].answer;
      input_params.sex = j.filter(i => i.key === "sex")[0].answer;
      input_params.race = j.filter(i => i.key === "race")[0].answer;
      input_params.country = j.filter(i => i.key === "country")[0].answer;
      input_params.sex = j.filter(i => i.key === "sex")[0].answer;
      
      var medCond = j.filter(i => i.key === "medical-conditions")[0].answer;
      medCond = medCond.toLowerCase().replace(" ", "-");
      var medCondPossibilities = [
        "asthma",
        "diabetes-mellitus",
        "chronic-lung-disease",
        "cardiovascular-disease",
        "immunocompromized",
        "chronic-renal-disease",
        "pregnancy",
        "neuro-disorder-conditions",
        "chronic-liver-disease",
        "other-chronic-disease"
      ];
      medCondPossibilities.forEach(p => {
        input_params[p] = medCond === p;
      });
      
      

      var smokHab = j.filter(i => i.key === "smoking-habits")[0].answer.toLowerCase();
      var fmrSmk = false;
      var curSmk = false;
      console.log(smokHab);
      if (smokHab.includes("yes.")) {
        curSmk = true;
        fmrSmk = true;
      } else if (smokHab.includes("no.")) {
        curSmk = false;
        fmrSmk = false;
      } else {
        curSmk = false;
        fmrSmk = true;
      }
      input_params["former-smoker"] = fmrSmk;
      input_params["current-smoker"] = curSmk;



      var isoKey = "isolated";
      var isoAns = j.filter(i => i.key === isoKey)[0].answer;
      var isoOpts = rawData.questions
                            .filter(i => i.key === isoKey)[0]
                            .answers.map(i => i.answer)
                            .reverse();
      input_params[isoKey] = isoOpts.indexOf(isoAns);

      var socDistKey = "social-distancing";
      var socDistAns = j.filter(i => i.key === socDistKey)[0].answer;
      var socDistOpts = rawData.questions
                            .filter(i => i.key === socDistKey)[0]
                            .answers.map(i => i.answer)
                            .reverse();
      input_params[socDistKey] = socDistOpts.indexOf(socDistAns);

      var wrMskKey = "wear-mask";
      var wrMskAns = j.filter(i => i.key === wrMskKey)[0].answer;
      var wrMskOpts = rawData.questions
                            .filter(i => i.key === wrMskKey)[0]
                            .answers.map(i => i.answer)
                            .reverse();
      input_params[wrMskKey] = wrMskOpts.indexOf(wrMskAns);

      var sanitKey = "sanitize";
      var sanitAns = j.filter(i => i.key === sanitKey)[0].answer;
      var sanitOpts = rawData.questions
                            .filter(i => i.key === sanitKey)[0]
                            .answers.map(i => i.answer)
                            .reverse();
      input_params[sanitKey] = sanitOpts.indexOf(sanitAns);

      
      
      var sympCond = j.filter(i => i.key === "symptoms")[0].answer;
      sympCond = sympCond.toLowerCase().replace(" ", "-");
      var sympCondPossibilities = [
        "sore-throat",
        "dry-cough",
        "nasal-congestion",
        "runny-nose",
        "shortness-of-breath",
        "fever",
        "anosmia",
        "tiredness",
        "aches",
        "diarrhoea"
      ];
      sympCondPossibilities.forEach(p => {
        input_params[p] = sympCond === p;
      });
      
      

      console.log(input_params);


    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>
