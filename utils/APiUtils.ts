import { test, expect, Locator, request } from "@playwright/test";
export class APiUtils {
apiContext;
loginPayLoad;

constructor(apiContext, loginPayLoad) {
this.apiContext = apiContext;
this.loginPayLoad = loginPayLoad;
}

async getToken() {
const loginResponseJson = await this.getLoginResponse();
const token = loginResponseJson.token;
// console.log(token);
return token;
}

async getLoginResponse() {
const loginResponse = await this.apiContext.post(
"https://rahulshettyacademy.com/api/ecom/auth/login",
{
data: this.loginPayLoad,
}
); //200,201,
const loginResponseJson = await loginResponse.json();
// console.log(JSON.stringify(loginResponseJson));
return loginResponseJson;
}

async createOrder(orderPayLoad)
{
let responseToken: any = {};
let response: any = await this.getLoginResponse();
responseToken = await this.getToken();
const orderResponse = await this.apiContext.post(
"https://rahulshettyacademy.com/api/ecom/order/create-order",
{
data: orderPayLoad,
headers: {
    "Authorization": responseToken,
    "Content-Type": "application/json",
}});
const orderResponseJson =await orderResponse.json();
// console.log("orderresponse  " + JSON.stringify(orderResponseJson));
const orderId = orderResponseJson.orders[0];
response.orderId = orderId;

return response;
}
}



