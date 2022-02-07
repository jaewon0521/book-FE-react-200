export const jsonForm = (str) => {

  let jsonstr = str;
  jsonstr = decodeURIComponent(jsonstr);
  let Json_form = JSON.stringify(jsonstr).replace(/\"/gi, "");
  Json_form = '{"' + Json_form.replace(/\&/g, '","').replace(/=/gi, '":"') + '"}';

  return Json_form;
};

const HTTP_METHOD = {
  async POST(data) {
    const jsonData = await jsonForm(data);
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };
  },
}

const request = async (url, option) => {
  const response = await fetch(url, option);
  return response;
}

const softApi = {
  async createSwtool(type, body) {
    return request(`/api/Swtool?type=${type}`,
      HTTP_METHOD.POST({ body }));
  }
}

export default softApi;

