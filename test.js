async function p() {
  throw 'error'
}

async function a() {
  'ha'
}


Promise.all([p(), a()]).then((v)=>{console.log(v)}).catch(r=>{console.log(r)});