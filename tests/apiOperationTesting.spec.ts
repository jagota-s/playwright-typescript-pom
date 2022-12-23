import { request } from "@playwright/test";
import test, { expect } from "../base_fwk/fixtures/baseTest"

test.describe('API CRUD operations examples', () => {
  
  test("Post reqres=", async ({ request, page }) => {
    const createUser = await request.post("https://reqres.in/api/users", {
      data: {
        "name": "spiderman",
        "job": "QA"
      },
    });
    console.log(await createUser.json());
  });

  test("Get reqres=", async ({ request }) => {
    const getUser = await request.get("https://reqres.in/api/users/2",);
    console.log(await getUser.json());
  })

  test("Delete reqres=", async ({ request }) => {
    const deleteUser = await request.delete("https://reqres.in/api/users/2");
    console.log(await deleteUser.status());
  })

  test("Update reqres", async ({ request }) => {
    const updateUser = await request.put("https://reqres.in/api/users/2", {
      data: {
        "name": "batman",
        "job": "gotham resident"
      }
    })
    console.log(await updateUser.json());
  })

});
