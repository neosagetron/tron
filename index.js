var displayOthers = document.getElementById('others')
var menuBtn = document.getElementById('menu')
var closeBtn = document.getElementById('close')

menuBtn.onclick = function(){
  displayOthers.style.display = 'block'
  closeBtn.style.display = 'block'
  menuBtn.style.display = 'none'
}
closeBtn.onclick = function(){
  displayOthers.style.display = 'none'
  closeBtn.style.display = 'none'
  menuBtn.style.display = 'block'
}


var joinBtn = document.getElementById('joinBtn')
var loginBtn = document.getElementById('loginBtn')
var openCon = document.getElementById('join_con')
var con = document.getElementById('con')
var rFeeBtn = document.getElementById('rFee')
var launchDate = document.getElementById('launchDate')
var close_ld = document.getElementById('close_ld')

joinBtn.onclick = function(){
  openCon.style.display = 'block'
  con.style.display = 'none'
  //launchDate.style.display = 'block'
}
rFeeBtn.onclick = function(){
  openCon.style.display = 'block'
  con.style.display = 'none'
  //launchDate.style.display = 'block'
}
close_ld.onclick = function(){
  launchDate.style.display = 'none'
}


var walletBtn = document.getElementById('wallet_icon')
var showWallet = document.getElementById('wallet_con_wrap')
var closeWallet = document.getElementById('close_wallet')

walletBtn.onclick = function(){
  showWallet.style.display = 'block'
}
closeWallet.onclick = function(){
  showWallet.style.display = 'none'
}

var lgin = document.getElementById('lgin')
var cwbtn = document.getElementById('cwbtn')
var showlogin_con = document.getElementById('login_con')
var create_wallet = document.getElementById('create_wallet')

lgin.onclick = function(){
  showlogin_con.style.display = 'block'
  create_wallet.style.display = 'none'
}
cwbtn.onclick = function(){
  showlogin_con.style.display = 'none'
  create_wallet.style.display = 'block'
}




var lcs_Btn =document.getElementById('lc_submit')
var cw_Btn = document.getElementById('c_wallet')
var show_wmain = document.getElementById('w_main')

lcs_Btn.onclick = function(){
  show_wmain.style.display = 'block'
  showlogin_con.style.display = 'none'
}
cw_Btn.onclick = function(){
  show_wmain.style.display = 'block'
  create_wallet.style.display = 'none'
}



var sendBtn = document.getElementById('send_trx')
var receiveBtn = document.getElementById('receive_trx')
var sendCon = document.getElementById('send_con')
var receiveCon = document.getElementById('recieve_con')

sendBtn.onclick = function(){
  sendCon.style.display = 'block'
  show_wmain.style.display = 'none'
}
receiveBtn.onclick = function(){
  receiveCon.style.display = 'block'
  show_wmain.style.display = 'none'
}

var scBack = document.getElementById('sc_back')
scBack.onclick = function(){
  sendCon.style.display = 'none'
  show_wmain.style.display = 'block'
}
var rcBack = document.getElementById('rc_back')
rcBack.onclick = function(){
  receiveCon.style.display = 'none'
  show_wmain.style.display = 'block'
}



var sendBtn = document.getElementById('send_btn')
var ibText = document.getElementById('insuficient_fund')

sendBtn.onclick = function(){
  ibText.style.display = 'block'
}
