
(function(){
    const CompanyProfileElement = document.getElementById('CompanyProfile');
    const CompanyProfileClassList = CompanyProfileElement.classList;
    const CompanyProfileAreaElement = document.getElementById('CompanyProfileArea');
    const OfficerElement = document.getElementById('Officer');
    const OfficerClassList = OfficerElement.classList;
    const AccessElement = document.getElementById('Access');
    const AccessElementClassList = AccessElement.classList;
    const HistoryElement = document.getElementById('History'); 
    const HistoryElementClassList = HistoryElement.classList;
    const SpaceID = document.getElementById('Space');
    const SpaceText = "・・・・・";
    SpaceID.innerText = SpaceText;



    CompanyProfileElement.addEventListener('click', SendDisplayProfile )
    function SendDisplayProfile(){
        $('.OfficerArea').fadeOut(1000);
        $('.AccessArea').fadeOut(1000);
        $('.HistoryArea').fadeOut(1000);
        if(CompanyProfileClassList[0] === 'none' || CompanyProfileClassList[1] === 'none'){
            CompanyProfileClassList.remove('none','true');
            CompanyProfileClassList.add('true');
            OfficerClassList.remove('none','true');
            OfficerClassList.add('none');
            AccessElementClassList.remove('none','true')
            AccessElementClassList.add('none');
            HistoryElementClassList.remove('none','true');
            HistoryElementClassList.add('none');
        }
        ClassTimeOuts
        setTimeout(function () {
            $('#CompanyProfileArea').fadeIn(2500);
        },1500)
    }


    OfficerElement.addEventListener('click', SendDisplayOfficerData )
    function SendDisplayOfficerData (){
        $('#CompanyProfileArea').fadeOut(1000);
        $('.AccessArea').fadeOut(1000);
        $('.HistoryArea').fadeOut(1000);
        if(OfficerClassList[0] === 'none' || OfficerClassList[1] === 'none'){
            CompanyProfileClassList.remove('none','true');
            CompanyProfileClassList.add('none');
            OfficerClassList.remove('none','true');
            OfficerClassList.add('true');
            AccessElementClassList.remove('none','true')
            AccessElementClassList.add('none');
            HistoryElementClassList.remove('none','true');
            HistoryElementClassList.add('none');
        }
        ClassTimeOuts
        setTimeout(function () {
            $('.OfficerArea').fadeIn(2500);
        },1500 )
    }

    AccessElement.addEventListener('click', SendDisplayAccess)
    function SendDisplayAccess(){
        $('.OfficerArea').fadeOut(1000);
        $('#CompanyProfileArea').fadeOut(1000);
        $('.HistoryArea').fadeOut(1000);
        if(AccessElementClassList[0] === 'none' || AccessElementClassList[1] === 'none'){
            CompanyProfileClassList.remove('none','true');
            CompanyProfileClassList.add('none');
            OfficerClassList.remove('none','true');
            OfficerClassList.add('none');
            AccessElementClassList.remove('none','true')
            AccessElementClassList.add('true');
            HistoryElementClassList.remove('none','true');
            HistoryElementClassList.add('none');
        }
        ClassTimeOuts
        setTimeout(function () {
            $('.AccessArea').fadeIn(2500)
        },1500)
    }

    HistoryElement.addEventListener('click', SendDisplayHistory)
    function SendDisplayHistory(){
        $('.OfficerArea').fadeOut(1000);
        $('#CompanyProfileArea').fadeOut(1000);
        $('.AccessArea').fadeOut(1000);
        if(HistoryElementClassList[0] === 'none' || HistoryElementClassList[1] === 'none'){
            CompanyProfileClassList.remove('none','true');
            CompanyProfileClassList.add('none');
            OfficerClassList.remove('none','true');
            OfficerClassList.add('none');
            AccessElementClassList.remove('none','true')
            AccessElementClassList.add('none');
            HistoryElementClassList.remove('none','true');
            HistoryElementClassList.add('true');
        }
        ClassTimeOuts
        setTimeout(function () {
            $('.HistoryArea').fadeIn(2500)
        },1500)
    }


    function ClassTimeOuts(){
        const ButtonClass = 'AboutPageButton';

        CompanyProfileClassList.remove(ButtonClass);
        OfficerClassList.remove(ButtonClass)
        HistoryElementClassList.remove(ButtonClass);
        AccessElementClassList.remove(ButtonClass);
        setTimeout(function (){
            CompanyProfileClassList.add(ButtonClass);
            OfficerClassList.add(ButtonClass)
            HistoryElementClassList.add(ButtonClass);
            AccessElementClassList.add(ButtonClass);    
        },1000);
    }
}())