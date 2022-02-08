export const jsonForm = (str) => {

  let jsonstr = str;
  jsonstr = decodeURIComponent(jsonstr);
  let Json_form = JSON.stringify(jsonstr).replace(/\"/gi, "");
  Json_form = '{"' + Json_form.replace(/\&/g, '","').replace(/=/gi, '":"') + '"}';

  return Json_form;
};