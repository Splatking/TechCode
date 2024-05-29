<?php
    function sendEmail($Email, $user, $Subject){
        $headers['From'] = 'system.techcode@gmail.com';
        $headers['Content-type'] = 'text/html; charset=iso-8859-1';
        $message;

        if($Subject == "Account creation"){
            $message = GenerateAccountCreationMail($user);
        } else if($Subject == "Account update"){
            $message = GenerateUpdateEmail($user);
        } else if($Subject == "Accountrole update"){
            $message = GenerateRolEmail($user);
        } else if($Subject == "Accountrole termination"){
            $message = GenerateTerminationEmail($user);
        }

        mail($Email, $Subject, $message, $headers);
    }

    function GenerateAccountCreationMail($User){
        return "Hey $User,<br><br> 
        Let your TechCode experience begin here!<br>
        Firstly welcome to TechCode! Thank you for chosing us are you go-to tech company.<br><br>
        
        For starters we've some tips and tricks to get you started:<br>
        <ul>
            <li>Make sure your account details are correct!</li>
            <li>all the provided account details will only be used for sending your products or giving you updates about them!</li>
            <li>Did you apply for an vacancy on our website? The details on this account can be automaticly used to fill in your application, we're looking forward into recieving it!</li>
            <li>By violating our terms of service and terms of policy your account can be blocked from all of our services. Expecting you won't do that but we still listed it here so you're aware of that :)</li>
        </ul><br><br>
        If there are still some questions unanswered don't hesitate to send us a mail on: system.techcode@gmail.com or visit our website: https://TechCode.com/ <br><br>
        <img src='http://localhost/TechCodeDatabase/Images/TechCode_Logo.jpg'> alt='TechCode'";
    }

    function GenerateUpdateEmail($User){
        return "Hey $User,<br><br> 
        just wanted to let you know. Your account is succesfully updated! Go check it out on https://TechCode.com for the full details of your account settings!<br><br>
        <img src='../Images/TechCode_Logo.jpg' alt='TechCode'>";
    }

    function GenerateRolEmail($User){
        return "Hey $User,<br><br> 
        just wanted to let you know. Your accountrole is succesfully updated (by an TechCode employee)! Go check it out on https://TechCode.com for the full details of your account settings!<br><br>
        <img src='http://localhost/TechCodeDatabase/Images/TechCode_Logo.jpg' alt='TechCode'>";
    }

    function GenerateTerminationEmail($User){
        return "Hey $User,<br><br> 
        We're sad to see you go! Because your account has been terminated (by you or an TechCode employee). This can have the following causes:<br>
        <ul>
            <li>A employee has found issues with you around our products.</li>
            <li>You've requested to terminate your account!</li>
        </ul><br><br>
        
        We hope you've a nice time and it was nice to have you!<br><br>
        <img src='http://localhost/TechCodeDatabase/Images/TechCode_Logo.jpg' alt='TechCode'>";
    }
?>