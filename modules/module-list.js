(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var I=$vm.hosting_path;
    var m=$vm.module_list;
    var api="wapp";
    //-------------------------------------------------------------------------------------
    m[p+"participant-data"] ={url:H+"/form-grid/participant/participant-data.html",Table:"crs-kol-participant"
                            ,form_module:"participant-form",
                            child_panel:"panel-child",
                            online_questionnaire_bl:"oq-bl",
                            online_questionnaire_w0:"oq-w0",
                            online_questionnaire_w3:"oq-w3",
                            online_questionnaire_w8:"oq-w8",
                            online_questionnaire_w16:"oq-w16",
                            online_questionnaire_w26:"oq-w26",
                            
                            
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"crs-kol-participant"},
    m[p+"notes-data"]       ={url:H+"/form-grid/questionnaires/notes-data.html",Table:"crs-kol-notes",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/questionnaires/notes-form.html",Table:"crs-kol-notes"},
    m[p+"oq-bl"] ={url:I+"/bl_quest.html"},
    m[p+"oq"] ={url:I+"/participant.html"},

    m[p+"main-panel"]    ={url:H+"/panels/main.html", };
    m[p+"quest-panel"]     ={url:H+"/panels/quest.html"};
    
    m[p+"nas-vas-data"] ={url:H+"/form-grid/questionnaires/nas-vas-data.html",Table:"crs-kol-nas-vas",form_module:"nas-vas-form", task_name:"NÄS-VAS" };
    m[p+"nas-vas-form"] ={url:H+"/form-grid/questionnaires/nas-vas-form.html",Table:"crs-kol-nas-vas", task_name:"NÄS-VAS" };
    m[p+"luftvagsformular-data"] ={url:H+"/form-grid/questionnaires/luftvagsformular-data.html",Table:"crs-kol-luftvagsformular",form_module:"luftvagsformular-form", task_name:"Luftvägsformulär" };
    m[p+"luftvagsformular-form"] ={url:H+"/form-grid/questionnaires/luftvagsformular-form.html",Table:"crs-kol-luftvagsformular", task_name:"Luftvägsformulär" };

    m[p+"isi-bl-data"]      ={url:H+"/form-grid/questionnaires/isi-bl-data.html",Table:"crs-kol-screening",form_module:"isi-bl-form", task_name:"Baseline - Insomnia Severity Index" };
    m[p+"isi-bl-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"crs-kol-screening", task_name:"Baseline - Insomnia Severity Index" };

    m[p+"psqi-bl-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"crs-kol-psqi-bl",form_module:"psqi-bl-form", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-bl-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"crs-kol-psqi-bl", task_name:"Baseline - Pittsburgh Sleep Quality Index" };
    m[p+"phq-bl-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"crs-kol-phq-bl",form_module:"phq-bl-form", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"phq-bl-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"crs-kol-phq-bl", task_name:"Baseline - Patient Health Questionnaire" };
    m[p+"gad7-bl-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"crs-kol-gad7-bl",form_module:"gad7-bl-form", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"gad7-bl-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"crs-kol-gad7-bl", task_name:"Baseline - Generalized Anxiety Disorder" };
    m[p+"ffs-bl-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"crs-kol-ffs-bl",form_module:"ffs-bl-form", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ffs-bl-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"crs-kol-ffs-bl", task_name:"Baseline - Flinders Fatigue Scale" };
    m[p+"ess-bl-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"crs-kol-ess-bl",form_module:"ess-bl-form", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"ess-bl-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"crs-kol-ess-bl", task_name:"Baseline - Epworth Sleepiness Scale" };
    m[p+"bc-cci-bl-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"crs-kol-bc-cci-bl",form_module:"bc-cci-bl-form", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-bl-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"crs-kol-bc-cci-bl", task_name:"Baseline - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-bl-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"crs-kol-eq-5d-bl",form_module:"eq-5d-bl-form", task_name:"Baseline - European Quality of Life" };
    m[p+"eq-5d-bl-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"crs-kol-eq-5d-bl", task_name:"Baseline - European Quality of Life" };
    m[p+"eheals-bl-data"]      ={url:H+"/form-grid/questionnaires/eheals-data.html",Table:"crs-kol-eheals-bl",form_module:"eheals-bl-form", task_name:"Baseline - eHealth Literacy Scale" };
    m[p+"eheals-bl-form"]      ={url:H+"/form-grid/questionnaires/eheals-form.html",Table:"crs-kol-eheals-bl", task_name:"Baseline - eHealth Literacy Scale" };

    m[p+"adverse-event-w3-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"crs-kol-adverse-event-w3",form_module:"adverse-event-w3-form", task_name:"Week 3 - Adverse Event Check-in" };
    m[p+"adverse-event-w3-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"crs-kol-adverse-event-w3", task_name:"Week 3 - Adverse Event Check-in" };

    m[p+"isi-w8-data"]      ={url:H+"/form-grid/questionnaires/isi-data.html",Table:"crs-kol-isi-w8",form_module:"isi-w8-form", task_name:"Week 8 - Insomnia Severity Index" };
    m[p+"isi-w8-form"]      ={url:H+"/form-grid/questionnaires/isi-form.html",Table:"crs-kol-isi-w8", task_name:"Week 8 - Insomnia Severity Index" };
    m[p+"psqi-w8-data"]      ={url:H+"/form-grid/questionnaires/psqi-data.html",Table:"crs-kol-psqi-w8",form_module:"psqi-w8-form", task_name:"Week 8 - Pittsburgh Sleep Quality Index" };
    m[p+"psqi-w8-form"]      ={url:H+"/form-grid/questionnaires/psqi-form.html",Table:"crs-kol-psqi-w8", task_name:"Week 8 - Pittsburgh Sleep Quality Index" };
    m[p+"phq-w8-data"]      ={url:H+"/form-grid/questionnaires/phq-data.html",Table:"crs-kol-phq-w8",form_module:"phq-w8-form", task_name:"Week 8 - Patient Health Questionnaire" };
    m[p+"phq-w8-form"]      ={url:H+"/form-grid/questionnaires/phq-form.html",Table:"crs-kol-phq-w8", task_name:"Week 8 - Patient Health Questionnaire" };
    m[p+"gad7-w8-data"]      ={url:H+"/form-grid/questionnaires/gad7-data.html",Table:"crs-kol-gad7-w8",form_module:"gad7-w8-form", task_name:"Week 8 - Generalized Anxiety Disorder" };
    m[p+"gad7-w8-form"]      ={url:H+"/form-grid/questionnaires/gad7-form.html",Table:"crs-kol-gad7-w8", task_name:"Week 8 - Generalized Anxiety Disorder" };
    m[p+"ffs-w8-data"]      ={url:H+"/form-grid/questionnaires/ffs-data.html",Table:"crs-kol-ffs-w8",form_module:"ffs-w8-form", task_name:"Week 8 - Flinders Fatigue Scale" };
    m[p+"ffs-w8-form"]      ={url:H+"/form-grid/questionnaires/ffs-form.html",Table:"crs-kol-ffs-w8", task_name:"Week 8 - Flinders Fatigue Scale" };
    m[p+"ess-w8-data"]      ={url:H+"/form-grid/questionnaires/ess-data.html",Table:"crs-kol-ess-w8",form_module:"ess-w8-form", task_name:"Week 8 - Epworth Sleepiness Scale" };
    m[p+"ess-w8-form"]      ={url:H+"/form-grid/questionnaires/ess-form.html",Table:"crs-kol-ess-w8", task_name:"Week 8 - Epworth Sleepiness Scale" };
    m[p+"bc-cci-w8-data"]      ={url:H+"/form-grid/questionnaires/bc-cci-data.html",Table:"crs-kol-bc-cci-w8",form_module:"bc-cci-w8-form", task_name:"Week 8 - British Columbia Cognitive Complaints Inventory" };
    m[p+"bc-cci-w8-form"]      ={url:H+"/form-grid/questionnaires/bc-cci-form.html",Table:"crs-kol-bc-cci-w8", task_name:"Week 8 - British Columbia Cognitive Complaints Inventory" };
    m[p+"eq-5d-w8-data"]      ={url:H+"/form-grid/questionnaires/eq-5d-data.html",Table:"crs-kol-eq-5d-w8",form_module:"eq-5d-w8-form", task_name:"Week 8 - European Quality of Life" };
    m[p+"eq-5d-w8-form"]      ={url:H+"/form-grid/questionnaires/eq-5d-form.html",Table:"crs-kol-eq-5d-w8", task_name:"Week 8 - European Quality of Life" };
    m[p+"adverse-event-w8-data"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-data.html",Table:"crs-kol-adverse-event-w8",form_module:"adverse-event-w3-form", task_name:"Week 8 - Adverse Event Check-in" };
    m[p+"adverse-event-w8-form"]      ={url:H+"/form-grid/questionnaires/adverse-event-cbti-form.html",Table:"crs-kol-adverse-event-w8", task_name:"Week 8 - Adverse Event Check-in" };
    
    m[p+"registration-data"]      ={url:H+"/form-grid/screening/registration-data.html",   Table:"crs-kol-participant",form_module:"registration-form",task_name:"Participant"};
    m[p+"registration-form"]      ={url:H+"/form-grid/screening/registration-form.html",Table:"crs-kol-participant",Table2:"crs-kol-screening", task_name:"Participant" };
    
    m[p+"randomisation-check-data"]      ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"crs-kol-progress",task_name:"Randomisation Check"};
    m[p+"progress-new-form"]      ={url:H+"/form-grid/backend/progress-new-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
    m[p+"progress-mod-form"]      ={url:H+"/form-grid/backend/progress-mod-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
 
    m[p+"start-date"]      ={url:H+"/form-grid/backend/date-start-form.html",   Table:"crs-kol-progress", task_name:"Start Date"};
    m[p+"send-email-control-data"]      ={url:H+"/form-grid/backend/send-email-control-data.html",   Table:"crs-kol-progress"};
    m[p+"send-email-treatment-data"]      ={url:H+"/form-grid/backend/send-email-treatment-data.html",   Table:"crs-kol-progress"};
    m[p+"send-email"]      ={url:H+"/form-grid/backend/send-email-form.html",   Table:"crs-kol-progress", task_name:"send email"};
    m[p+"fitbit-sent"]      ={url:H+"/form-grid/backend/fitbit-sent-form.html",   Table:"crs-kol-progress", task_name:"Date - Fitbit Sent"};

    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
