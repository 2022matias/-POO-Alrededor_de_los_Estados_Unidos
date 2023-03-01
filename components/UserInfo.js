import { profileName, profileSkill, profileAvatar } from "../utils/constants.js";
import { api } from "../components/Api";

export class UserInfo {
  constructor(name, job, avatar) {
    this._name = name;
    this._skill = job;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._skill.textContent,
      avatar: this._avatar.src,
    };
  }
  
  setUserInfo(newName, newJob, newAvatar) {
    profileName.textContent = newName;
    profileSkill.textContent = newJob;
    profileAvatar.src = newAvatar;
  }
}

api.getUserInfo().then((res) =>{
  
  res.name,
  res.about,
  res.avatar
});

export const userInfo = new UserInfo(profileName, profileSkill, profileAvatar);