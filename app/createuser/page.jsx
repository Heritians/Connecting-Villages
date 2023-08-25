"use client";

import { useState, useContext, useReducer } from "react";
import AuthContext from "@/Utils/Auth";
import { GlobalLinks } from "@/assets";
import { UploadCloud } from "lucide-react";
import Papa from "papaparse";
import authCheck from "@/components/HOC/authCheck";
import { Eye, EyeOff } from "lucide-react";

const CreateUserPage = () => {
  const { authData, villages_list } = useContext(AuthContext);

  const [usersFile, setUsersFile] = useState(null);
  const [aadhaarPassword, setAadhaarPassword] = useState({
    aadhaar_no: "",
    password: "",
    role: "user",
    village: authData?.village_name
      ? authData.village_name.split(" ").join("_")
      : "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setUsersFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const create_user_page_button = document.getElementById(
      "create_user_page_button"
    );
    const create_user_page_alert_green = document.getElementById(
      "create_user_page_alert_green"
    );
    const create_user_page_alert_red = document.getElementById(
      "create_user_page_alert_red"
    );
    const create_user_page_alert_orange = document.getElementById(
      "create_user_page_alert_orange"
    );
    try {
      create_user_page_button.disabled = true;
      create_user_page_button.innerHTML = "Creating User(s)...";

      if (usersFile) {
        Papa.parse(usersFile, {
          complete: async function (results) {
            const userLists = {
              validation_ignores: [],
              invalid_users: [],
              valid_users: [],
            };

            for (let index = 0; index * 10 < results.data.length; index++) {
              create_user_page_button.innerHTML = `Creating User(s) ${
                index * 10 + 1
              } - ${Math.min(results.data.length, (index + 1) * 10)}...`;

              const chunk = results.data.slice(
                index * 10,
                Math.min(results.data.length, (index + 1) * 10)
              );

              let valid_users = {
                aadhaar_nos: [],
                passwords: [],
              };

              chunk.map((user) => {
                if (user[0].length === 12 && user[1].length >= 5) {
                  valid_users.aadhaar_nos.push(user[0]);
                  valid_users.passwords.push(user[1]);
                } else {
                  userLists.validation_ignores.push(user[0]);
                }
              });

              const fetchResponse = await fetch(
                `${process.env.NEXT_PUBLIC_UBA_FORM_API}/auth/signup`,
                {
                  method: "POST",
                  body: JSON.stringify({
                    AADHAR_NOS: valid_users.aadhaar_nos,
                    passwords: valid_users.passwords,
                    village_name: aadhaarPassword.village,
                    role: aadhaarPassword.role,
                  }),
                  headers: {
                    Authorization: "Bearer " + authData.access_token,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }
              );

              const responseData = await fetchResponse.json();

              if (fetchResponse.status === 200) {
                responseData.data.valid_users.forEach((aadhaar) => {
                  userLists.valid_users.push(aadhaar);
                });
                responseData.data.invalid_users.forEach((aadhaar) => {
                  userLists.invalid_users.push(aadhaar);
                });
              }
            }

            if (userLists.valid_users.length > 0) {
              create_user_page_alert_green.classList.remove("hidden");
              create_user_page_alert_green.innerHTML = `User(s) Created Successfully!`;
              setTimeout(() => {
                create_user_page_alert_green.classList.add("hidden");
                create_user_page_alert_green.innerHTML = "";
              }, 5000);
            }

            if (userLists.invalid_users.length > 0) {
              create_user_page_alert_red.classList.remove("hidden");
              create_user_page_alert_red.innerHTML = `User(s) not created for Aadhaar(s): ${userLists.invalid_users.join(
                ", "
              )}`;
              setTimeout(() => {
                create_user_page_alert_red.classList.add("hidden");
                create_user_page_alert_red.innerHTML = "";
              }, 5000);
            }

            if (userLists.validation_ignores.length > 0) {
              create_user_page_alert_orange.classList.remove("hidden");
              create_user_page_alert_orange.innerHTML = `Invalid users not considered: ${userLists.validation_ignores.join(
                ", "
              )}`;
              setTimeout(() => {
                create_user_page_alert_orange.classList.add("hidden");
                create_user_page_alert_orange.innerHTML = "";
              }, 5000);
            }

            create_user_page_button.disabled = false;
            create_user_page_button.innerHTML = "Create User(s)";
          },
        });
      } else {
        const fetchResponse = await fetch(
          `${process.env.NEXT_PUBLIC_UBA_FORM_API}/auth/signup`,
          {
            method: "POST",
            body: JSON.stringify({
              AADHAR_NO: aadhaarPassword.aadhaar_no,
              password: aadhaarPassword.password,
              village_name: aadhaarPassword.village,
              role: aadhaarPassword.role,
            }),
            headers: {
              Authorization: "Bearer " + authData.access_token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        create_user_page_button.disabled = false;
        create_user_page_button.innerHTML = "Create User(s)";
        if (fetchResponse.status === 200) {
          create_user_page_alert_green.classList.remove("hidden");
          create_user_page_alert_green.innerHTML =
            "User(s) Created Successfully!";
          document.getElementById("create_aadhaar_no").value = "";
          document.getElementById("create_password").value = "";
          setTimeout(() => {
            create_user_page_alert_green.classList.add("hidden");
          }, 4000);
        } else if (fetchResponse.status === 226) {
          create_user_page_alert_red.classList.remove("hidden");
          create_user_page_alert_red.innerHTML =
            "User with this Aadhaar already exists.";
          setTimeout(() => {
            create_user_page_alert_red.classList.add("hidden");
          }, 4000);
        } else if (fetchResponse.status === 401) {
          create_user_page_alert_red.classList.remove("hidden");
          create_user_page_alert_red.innerHTML = "Unauthorized Access.";
          setTimeout(() => {
            create_user_page_alert_red.classList.add("hidden");
          }, 4000);
        } else {
          create_user_page_alert_red.classList.remove("hidden");
          create_user_page_alert_red.innerHTML =
            "Error creating user(s). Please try again.";
          setTimeout(() => {
            create_user_page_alert_red.classList.add("hidden");
          }, 4000);
        }
      }
    } catch (error) {
      create_user_page_alert_red.classList.remove("hidden");
      create_user_page_alert_red.innerHTML =
        "Error creating user(s). Please try again.";
      setTimeout(() => {
        create_user_page_alert_red.classList.add("hidden");
      }, 4000);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/3 bg-white rounded-xl p-4 flex flex-col items-center justify-center h-max mx-4 my-20"
      >
        <h2 className="text-4xl py-3 font-semibold text-primary-orange">
          Create <span className="text-primary-blue">User</span>
        </h2>

        <div className="w-full flex flex-col items-center justify-center mt-5">
          <input
            className="login_create_input my-2"
            type="text"
            placeholder="Aadhaar Number"
            name="create_aadhaar_no"
            id="create_aadhaar_no"
            minLength={12}
            maxLength={12}
            onChange={(e) => {
              setAadhaarPassword({
                ...aadhaarPassword,
                aadhaar_no: e.target.value,
              });
            }}
            required={usersFile ? false : true}
            disabled={usersFile ? true : false}
          />
          <div className="w-full relative">
            <input
              className="login_create_input my-2"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              name="create_password"
              id="create_password"
              minLength={5}
              onChange={(e) => {
                setAadhaarPassword({
                  ...aadhaarPassword,
                  password: e.target.value,
                });
              }}
              required={usersFile ? false : true}
              disabled={usersFile ? true : false}
            />
            <button
              className="absolute inset-y-0 right-3 text-black/50"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <span className="w-full text-center text-black/50 my-2">
          - - OR - -
        </span>

        <div className="w-full flex flex-col items-start justify-center">
          <label
            onDragEnter={(e) => handleDragEnter(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-max border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            {usersFile ? (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 text-center">
                  File uploaded successfully
                </p>
                <p className="text-xs text-gray-500 font-bold text-center">
                  {usersFile.name}
                </p>
                <p className="text-xs text-gray-500 text-center">
                  Click again to upload or drag &amp; drop a different file
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-8 h-8 mb-4 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500 text-center">
                  <span className="font-semibold">Click to upload</span> or drag
                  &amp; drop a file
                </p>
                <p className="text-xs text-gray-500 text-center">CSVs Only</p>
              </div>
            )}

            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".csv"
              onChange={(e) => {
                setUsersFile(e.target.files[0]);
              }}
            />
          </label>
          <div
            className={`w-full ${usersFile ? "flex" : "hidden"} justify-end`}
          >
            <p
              className="w-max text-right text-xs underline text-blue-600 cursor-pointer"
              onClick={() => {
                setUsersFile(null);
              }}
            >
              Remove uploaded file
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-start mt-5">
          <label className="w-2/3">Role:</label>
          {authData?.role === "GOVTOff" ? (
            <select
              className="login_create_input my-2 ml-2"
              name="create_role"
              id="create_role"
              required
              defaultValue="None"
              onChange={(e) => {
                setAadhaarPassword({
                  ...aadhaarPassword,
                  role: e.target.value,
                });
              }}
            >
              <option value="None" disabled>
                Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          ) : (
            <select
              className="login_create_input my-2 ml-2"
              name="create_role"
              id="create_role"
              disabled
              defaultValue="user"
              onChange={(e) => {
                setAadhaarPassword({
                  ...aadhaarPassword,
                  role: e.target.value,
                });
              }}
            >
              <option value="user">User</option>
            </select>
          )}
        </div>

        <div className="w-full flex flex-row items-center justify-start">
          <label className="w-2/3">Village:</label>
          {authData?.role === "GOVTOff" ? (
            <select
              className="login_create_input my-2 ml-2"
              name="create_village"
              id="create_village"
              required
              defaultValue="None"
              onChange={(e) => {
                setAadhaarPassword({
                  ...aadhaarPassword,
                  village: e.target.value,
                });
              }}
            >
              <option value="None" disabled>
                Select Village
              </option>
              {villages_list.map((village) => (
                <option value={village} key={village}>
                  {village.split("_").join(" ")}
                </option>
              ))}
            </select>
          ) : (
            <select
              className="login_create_input my-2 ml-2"
              name="create_village"
              id="create_village"
              disabled
              defaultValue={authData?.village_name.split(" ").join("_")}
              onChange={(e) => {
                setAadhaarPassword({
                  ...aadhaarPassword,
                  password: e.target.value,
                });
              }}
            >
              <option
                value={authData?.village_name.split(" ").join("_")}
                disabled
              >
                {authData?.village_name}
              </option>
            </select>
          )}
        </div>

        <div className="w-full flex flex-row items-center justify-start mt-5">
          <input type="checkbox" name="terms" required />
          <label className="ml-2">
            I agree to the{" "}
            <a href={GlobalLinks.TnC} className="underline text-blue-600">
              Terms & Conditions
            </a>
          </label>
        </div>

        <div
          id="create_user_page_alert_green"
          className="w-full text-center p-2 mt-2 rounded-lg bg-green-600 hidden"
        ></div>

        <div
          id="create_user_page_alert_red"
          className="w-full text-center p-2 mt-2 rounded-lg bg-red-600 hidden"
        ></div>

        <div
          id="create_user_page_alert_orange"
          className="w-full text-center p-2 mt-2 rounded-lg bg-orange-600 hidden"
        ></div>

        <button className="orange_btn mt-3" id="create_user_page_button">
          Create User(s)
        </button>
      </form>
    </div>
  );
};

export default authCheck(CreateUserPage);
