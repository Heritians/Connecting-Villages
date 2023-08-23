"use client";

import AuthContext from "@/Utils/Auth";
import { GlobalLinks } from "@/assets";
import { Header } from "@/components";
import authCheck from "@/components/HOC/authCheck";
import { X } from "lucide-react";
import { useContext, useState, useEffect } from "react";

const VillagesPage = () => {
  const { authData } = useContext(AuthContext);
  const [villages, setVillages] = useState([]);
  const [villageToAdd, setVillageToAdd] = useState();

  const village_confirm_alert = document.getElementById(
    "village_confirm_alert"
  );
  const add_village_btn = document.getElementById("add_village_btn");
  const add_village_popup = document.getElementById("add_village_popup");
  const add_village_alert = document.getElementById("add_village_alert");

  const handleVillageToAdd = (e) => {
    setVillageToAdd(e.target.value.split(" ").join("_"));
  };

  const handleConfirmVillageToAdd = (e) => {
    if (e.target.value.split(" ").join("_") === villageToAdd) {
      add_village_btn.disabled = false;
      village_confirm_alert.classList.add("hidden");
    } else {
      add_village_btn.disabled = true;
      village_confirm_alert.classList.remove("hidden");
    }
  };

  const GetVillages = async () => {
    const fetchResponse = await fetch(
      `${process.env.NEXT_PUBLIC_UBA_FORM_API}/api/get_village_list`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + authData.access_token,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await fetchResponse.json();
    setVillages(data.data.village_names);
  };

  const handleAddVillage = async (e) => {
    e.preventDefault();
    add_village_btn.disabled = true;
    add_village_btn.innerHTML = "Adding Village...";

    const fetchResponse = await fetch(
      `${process.env.NEXT_PUBLIC_UBA_FORM_API}/ops/update_village_list?dbname=${villageToAdd}`,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + authData.access_token,
          "Content-Type": "application/json",
        },
        body: "",
      }
    );
    const data = await fetchResponse.json();
    if (data?.status === "success") {
      GetVillages();
      add_village_popup.classList.remove("flex");
      add_village_popup.classList.add("hidden");
      document.getElementById("villageName").value = "";
      document.getElementById("confirmVillageName").value = "";
    } else {
      add_village_alert.classList.remove("hidden");
      add_village_alert.innerHTML = "Error adding village!";
      add_village_alert.classList.add("bg-red-500");
      setTimeout(() => {
        add_village_alert.classList.add("hidden");
        add_village_alert.classList.remove("bg-red-500");
      }, 3000);
    }

    add_village_btn.disabled = false;
    add_village_btn.innerHTML = "Add Village";
  };

  const deleteVillage = async () => {};

  useEffect(() => {
    GetVillages();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-start items-center min-h-[60vh] mb-4">
        <h1 className="section_title">Our prosperous villages</h1>
        {villages.length > 0 && (
          <>
            <div className="flex flex-col w-4/5 sm:w-1/3">
              {villages.map((village) => (
                <div
                  key={village}
                  className="w-full bg-white p-1 text-center rounded-xl my-2"
                >
                  <h1 className="text-2xl font-semibold">
                    {village.split("_").join(" ")}
                  </h1>
                </div>
              ))}
            </div>
            <div className="w-4/5 sm:w-1/3 flex flex-row justify-between items-center my-4">
              <button
                className="orange_btn"
                onClick={() => {
                  add_village_popup.classList.add("flex");
                  add_village_popup.classList.remove("hidden");
                }}
              >
                Add Village
              </button>
              <button disabled className="orange_btn">
                Delete Village
              </button>
            </div>
          </>
        )}
      </div>

      <div
        id="add_village_popup"
        className="w-screen h-screen fixed hidden justify-center items-center bg-black/70 z-30"
      >
        <div className="bg-primary-cream w-4/5 sm:w-1/4 rounded-lg flex flex-col items-center justify-between py-4 relative">
          <button
            className="absolute top-3 right-3"
            onClick={() => {
              add_village_popup.classList.remove("flex");
              add_village_popup.classList.add("hidden");
            }}
          >
            <X size={20} />
          </button>
          <h1 className="text-2xl font-medium text-primary-orange mb-3">
            Add Village
          </h1>
          <form className="flex flex-col w-4/5" onSubmit={handleAddVillage}>
            <label className="text-md">Enter Village Name</label>
            <input
              type="text"
              className="login_create_input my-1"
              placeholder="Village Name"
              name="villageName"
              id="villageName"
              onChange={handleVillageToAdd}
              required
            />
            <label className="text-md mt-3">Confirm Village Name</label>
            <input
              type="text"
              className="login_create_input my-1"
              placeholder="Village Name"
              name="confirmVillageName"
              id="confirmVillageName"
              onChange={handleConfirmVillageToAdd}
              disabled={villageToAdd ? false : true}
              required
            />
            <p
              id="village_confirm_alert"
              className="w-full text-xs text-right text-red-500 leading-none hidden"
            >
              Village names do not match!
            </p>
            <div className="w-full flex flex-row items-center justify-start mt-3">
              <input type="checkbox" name="terms" required />
              <label className="ml-2">
                I agree to the{" "}
                <a href={GlobalLinks.TnC} className="underline text-blue-600">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <div
              id="add_village_alert"
              className="w-full p-1 rounded-lg text-center mt-1 hidden"
            ></div>

            <button
              disabled
              id="add_village_btn"
              className="orange_btn mt-4"
              type="submit"
            >
              Add Village
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default authCheck(VillagesPage);
