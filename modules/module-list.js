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
                            child_panel:"child-panel",
                            online_questionnaire_bl:"oq",
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"crs-kol-participant"},
    m[p+"notes-data"]       ={url:H+"/form-grid/questionnaires/notes-data.html",Table:"crs-kol-notes",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/questionnaires/notes-form.html",Table:"crs-kol-notes"},
    m[p+"oq"] ={url:I+"/quest.html"},
    //m[p+"oq"] ={url:I+"/participant.html"},

    m[p+"main-panel"]    ={url:H+"/panels/main.html", };
    m[p+"child-panel"]    ={url:H+"/panels/child.html", };
    m[p+"quest-panel"]     ={url:H+"/panels/quest.html"};
    
    m[p+"nas-vas-data"] ={url:H+"/form-grid/questionnaires/nas-vas-data.html",Table:"crs-kol-nas-vas",form_module:"nas-vas-form",task_name:"NÄS-VAS" };
    m[p+"nas-vas-form"] ={url:H+"/form-grid/questionnaires/nas-vas-form.html",Table:"crs-kol-nas-vas",progress:'nas-vas',task_name:"NÄS-VAS" };
    m[p+"luftvagsformular-data"] ={url:H+"/form-grid/questionnaires/luftvagsformular-data.html",Table:"crs-kol-luftvagsformular",form_module:"luftvagsformular-form", task_name:"Luftvägsformulär" };
    m[p+"luftvagsformular-form"] ={url:H+"/form-grid/questionnaires/luftvagsformular-form.html",Table:"crs-kol-luftvagsformular", task_name:"Luftvägsformulär" };
    m[p+"snot-22-data"] ={url:H+"/form-grid/questionnaires/snot-22-data.html",Table:"crs-kol-snot-22",form_module:"snot-22-form", task_name:"SNOT - 22" };
    m[p+"snot-22-form"] ={url:H+"/form-grid/questionnaires/snot-22-form.html",Table:"crs-kol-snot-22", task_name:"SNOT - 22" };
    m[p+"sf36-data"] ={url:H+"/form-grid/questionnaires/sf36-data.html",Table:"crs-kol-sf36",form_module:"sf36-form", task_name:"SF - 36" };
    m[p+"sf36-form"] ={url:H+"/form-grid/questionnaires/sf36-form.html",Table:"crs-kol-sf36", task_name:"SF - 36" };
    m[p+"cat-data"] ={url:H+"/form-grid/questionnaires/cat-data.html",Table:"crs-kol-cat",form_module:"cat-form", task_name:"HUR UPPLEVER DU DIN KOL? – COPD ASSESSMENT TEST (CAT)" };
    m[p+"cat-form"] ={url:H+"/form-grid/questionnaires/cat-form.html",Table:"crs-kol-cat", task_name:"HUR UPPLEVER DU DIN KOL? – COPD ASSESSMENT TEST (CAT)" };
    m[p+"mmrc-data"] ={url:H+"/form-grid/questionnaires/mmrc-data.html",Table:"crs-kol-mmrc",form_module:"mmrc-form", task_name:"MMRC" };
    m[p+"mmrc-form"] ={url:H+"/form-grid/questionnaires/mmrc-form.html",Table:"crs-kol-mmrc", task_name:"MMRC" };
    m[p+"hads-data"] ={url:H+"/form-grid/questionnaires/hads-data.html",Table:"crs-kol-hads",form_module:"hads-form", task_name:"HAD SJÄLVSKATTNINGSFORMULÄR" };
    m[p+"hads-form"] ={url:H+"/form-grid/questionnaires/hads-form.html",Table:"crs-kol-hads", task_name:"HAD SJÄLVSKATTNINGSFORMULÄR" };
    m[p+"munhalsa-data"] ={url:H+"/form-grid/questionnaires/munhalsa-data.html",Table:"crs-kol-munhalsa",form_module:"munhalsa-form", task_name:"MUNHÄLSA" };
    m[p+"munhalsa-form"] ={url:H+"/form-grid/questionnaires/munhalsa-form.html",Table:"crs-kol-munhalsa", task_name:"MUNHÄLSA" };

    m[p+"samtycke-data"] ={url:H+"/form-grid/backend/samtycke-data.html",Table:"crs-kol-samtycke",form_module:"samtycke-form", task_name:"Samtycke" };
    m[p+"samtycke-form"] ={url:H+"/form-grid/backend/samtycke-form.html",Table:"crs-kol-samtycke",progress:'samtycke', task_name:"Samtycke" };
    m[p+"lab-data"] ={url:H+"/form-grid/backend/lab-data.html",Table:"crs-kol-lab",form_module:"lab-form", task_name:"Laboratorie resultat" };
    m[p+"lab-form"] ={url:H+"/form-grid/backend/lab-form.html",Table:"crs-kol-lab", task_name:"Laboratorie resultat" };
    m[p+"spirometri-data"] ={url:H+"/form-grid/backend/spirometri-data.html",Table:"crs-kol-spirometri",form_module:"spirometri-form", task_name:"Spirometri" };
    m[p+"spirometri-form"] ={url:H+"/form-grid/backend/spirometri-form.html",Table:"crs-kol-spirometri", task_name:"Spirometri" };
    m[p+"langd-vikt-data"] ={url:H+"/form-grid/backend/langd-vikt-data.html",Table:"crs-kol-langd-vikt",form_module:"langd-vikt-form", task_name:"Längd och vikt" };
    m[p+"langd-vikt-form"] ={url:H+"/form-grid/backend/langd-vikt-form.html",Table:"crs-kol-langd-vikt", task_name:"Längd och vikt" };
    m[p+"fiberskopi-data"] ={url:H+"/form-grid/backend/fiberskopi-data.html",Table:"crs-kol-fiberskopi",form_module:"fiberskopi-form", task_name:"Fiberskopi" };
    m[p+"fiberskopi-form"] ={url:H+"/form-grid/backend/fiberskopi-form.html",Table:"crs-kol-fiberskopi", task_name:"Fiberskopi" };
    m[p+"rhinomanometri-data"] ={url:H+"/form-grid/backend/rhinomanometri-data.html",Table:"crs-kol-rhinomanometri",form_module:"rhinomanometri-form", task_name:"Rhinomanometri" };
    m[p+"rhinomanometri-form"] ={url:H+"/form-grid/backend/rhinomanometri-form.html",Table:"crs-kol-rhinomanometri", task_name:"Rhinomanometri" };
    m[p+"akustisk-rhinomanometri-data"] ={url:H+"/form-grid/backend/akustisk-rhinomanometri-data.html",Table:"crs-kol-akustisk-rhinomanometri",form_module:"akustisk-rhinomanometri-form", task_name:"Akustisk rhinomanometri" };
    m[p+"akustisk-rhinomanometri-form"] ={url:H+"/form-grid/backend/akustisk-rhinomanometri-form.html",Table:"crs-kol-akustisk-rhinomanometri", task_name:"Akustisk rhinomanometri" };
    m[p+"cbct-data"] ={url:H+"/form-grid/backend/cbct-data.html",Table:"crs-kol-cbct",form_module:"cbct-form", task_name:"CBCT" };
    m[p+"cbct-form"] ={url:H+"/form-grid/backend/cbct-form.html",Table:"crs-kol-cbct", task_name:"CBCT" };
    m[p+"derived-data"] ={url:H+"/form-grid/backend/derived-data.html",Table:"crs-kol-derived",form_module:"derived-form", task_name:"DERIVED" };
    m[p+"derived-form"] ={url:H+"/form-grid/backend/derived-form.html",Table:"crs-kol-derived", task_name:"DERIVED" };

    
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
    
    //m[p+"randomisation-check-data"] ={url:H+"/form-grid/backend/randomisation-check-data.html",   Table:"crs-kol-progress",task_name:"Randomisation Check"};
    //m[p+"progress-new-form"] ={url:H+"/form-grid/backend/progress-new-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
    //m[p+"progress-mod-form"] ={url:H+"/form-grid/backend/progress-mod-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
    m[p+"progress_form"] ={url:H+"/form-grid/backend/progress-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
 
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
