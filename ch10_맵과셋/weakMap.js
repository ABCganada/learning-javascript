//맵과의 차이점
//키는 반드시 객체
//이터러블이 아니다?

const SecretHolder = (function () {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this.secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  };
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret("Secret A");
b.setSecret("Secret B");

console.log(a.getSecret());
console.log(b.getSecret());
