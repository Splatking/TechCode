function LoadAccountSettings(){
    if(sessionStorage.getItem("TechNaam") != null){
        return "Loaded";
    } else {
        return "NoUserData";
    }
}

export default LoadAccountSettings;