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
    try {
      const create_user_page_button = document.getElementById(
        "create_user_page_button"
      );
      const create_user_page_alert = document.getElementById(
        "create_user_page_alert"
      );
      create_user_page_button.disabled = true;
      create_user_page_button.innerHTML = "Creating User(s)...";

      if (usersFile) {
        Papa.parse(usersFile, {
          complete: function (results) {
            let chunks = [];

            while (results.data.length > 0) {
              chunks.push(results.data.splice(0, 10));
            }

            let chunkedAadhaar = [];
            let chunkedPassword = [];

            chunks.forEach((chunk) => {
              let aadhaar = [];
              let pass = [];
              chunk.forEach((chun) => {
                aadhaar.push(chun[0]);
                pass.push(chun[1]);
              });
              chunkedAadhaar.push(aadhaar);
              chunkedPassword.push(pass);
            });

            const usersToCreate = chunkedAadhaar.map((aadhaar, index) => {
              return [aadhaar, chunkedPassword[index]];
            });

            usersToCreate.forEach(async (user, index) => {
              const fetchResponse = await fetch(
                `${process.env.NEXT_PUBLIC_UBA_FORM_API}/auth/signup`,
                {
                  method: "POST",
                  body: JSON.stringify({
                    AADHAR_NOS: user[0],
                    passwords: user[1],
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
              const data = await fetchResponse.json();
              console.log(data);

              if (index === usersToCreate.length - 1) {
                create_user_page_button.disabled = false;
                create_user_page_button.innerHTML = "Create User(s)";
                create_user_page_alert.classList.remove("hidden");
                create_user_page_alert.classList.add("bg-green-600");
                create_user_page_alert.innerHTML =
                  "User(s) Created Successfully!";
                setTimeout(() => {
                  create_user_page_alert.classList.add("hidden");
                }, 4000);
              }
            });
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
        let data = await fetchResponse.json();
        create_user_page_button.disabled = false;
        create_user_page_button.innerHTML = "Create User(s)";
        if (data?.status === "success") {
          create_user_page_alert.classList.remove("hidden");
          create_user_page_alert.classList.add("bg-green-600");
          create_user_page_alert.innerHTML = "User(s) Created Successfully!";
          setTimeout(() => {
            create_user_page_alert.classList.add("hidden");
          }, 4000);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          data = JSON.parse(data);
          create_user_page_alert.classList.remove("hidden");
          create_user_page_alert.classList.add("bg-red-600");
          create_user_page_alert.innerHTML = data.message[1];
          setTimeout(() => {
            create_user_page_alert.classList.add("hidden");
          }, 4000);
        }
      }
    } catch (error) {
      console.log("error creating user(s)", error);
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
          id="create_user_page_alert"
          className="w-full text-center p-2 mt-2 rounded-lg hidden"
        ></div>

        <button className="orange_btn mt-3" id="create_user_page_button">
          Create User(s)
        </button>
      </form>
    </div>
  );
};

export default authCheck(CreateUserPage);
