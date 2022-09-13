// import member_V1 from "./member_V1"

let obj = {
  logIn: () => {
    console.log("login");
  },
  signUp: () => {
    console.log("signUp");
  },
};

let memberControl = (member) => {
  return {
    test: () => {
      console.log("test");
    },
    signUp: member.signUp,
    logIn: member.logIn,
  };
};

let meb = memberControl(obj);

meb.logIn();
