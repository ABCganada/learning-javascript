const o = {
  name: "Julie",
  greetBackwords: function () {
    const self = this;
    //이걸 안해주고 getReverseName()에 진입하면 this는 o에 묶이지가 않는다?
    //이런 문제 피하기 위해 주로 쓰이는 방법
    function getReverseName() {
      let nameBackwords = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwords += self.name[i];
      }
      return nameBackwords;
    }
    return `${getReverseName()}`;
  },
};

console.log(o.greetBackwords());