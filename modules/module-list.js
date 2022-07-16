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
                            online_questionnaire_hd:"hd",
    };                   
    m[p+"participant-form"] ={url:H+"/form-grid/participant/participant-form.html",Table:"crs-kol-participant"},
    m[p+"notes-data"]       ={url:H+"/form-grid/questionnaires/notes-data.html",Table:"crs-kol-notes",form_module:"notes-form",router:1},
    m[p+"notes-form"]       ={url:H+"/form-grid/questionnaires/notes-form.html",Table:"crs-kol-notes"},
    m[p+"oq"] ={url:I+"/quest.html"},
    m[p+"hd"] ={url:I+"/hd.html"},
    //m[p+"oq"] ={url:I+"/participant.html"},

    m[p+"main-panel"]    ={url:H+"/panels/main.html", };
    m[p+"child-panel"]    ={url:H+"/panels/child.html", };
    m[p+"quest-panel"]     ={url:H+"/panels/quest.html"};
    m[p+"hd-panel"]     ={url:H+"/panels/hd.html"};
    
    m[p+"nas-vas-data"] ={url:H+"/form-grid/questionnaires/nas-vas-data.html",Table:"crs-kol-nas-vas",form_module:"nas-vas-form",task_name:"NÄS-VAS" };
    m[p+"nas-vas-form"] ={url:H+"/form-grid/questionnaires/nas-vas-form.html",Table:"crs-kol-nas-vas",progress:'p4_1',task_name:"NÄS-VAS" };
    m[p+"luftvagsformular-data"] ={url:H+"/form-grid/questionnaires/luftvagsformular-data.html",Table:"crs-kol-luftvagsformular",form_module:"luftvagsformular-form", task_name:"Luftvägsformulär" };
    m[p+"luftvagsformular-form"] ={url:H+"/form-grid/questionnaires/luftvagsformular-form.html",progress:'p4_2',Table:"crs-kol-luftvagsformular", task_name:"Luftvägsformulär" };
    m[p+"snot-22-data"] ={url:H+"/form-grid/questionnaires/snot-22-data.html",Table:"crs-kol-snot-22",form_module:"snot-22-form", task_name:"SNOT - 22" };
    m[p+"snot-22-form"] ={url:H+"/form-grid/questionnaires/snot-22-form.html",Table:"crs-kol-snot-22",progress:'p4_3', task_name:"SNOT - 22" };
    m[p+"sf36-data"] ={url:H+"/form-grid/questionnaires/sf36-data.html",Table:"crs-kol-sf36",form_module:"sf36-form", task_name:"SF - 36" };
    m[p+"sf36-form"] ={url:H+"/form-grid/questionnaires/sf36-form.html",Table:"crs-kol-sf36",progress:'p4_4', task_name:"SF - 36" };
    m[p+"cat-data"] ={url:H+"/form-grid/questionnaires/cat-data.html",Table:"crs-kol-cat",form_module:"cat-form", task_name:"HUR UPPLEVER DU DIN KOL? – COPD ASSESSMENT TEST (CAT)" };
    m[p+"cat-form"] ={url:H+"/form-grid/questionnaires/cat-form.html",Table:"crs-kol-cat",progress:'p4_5', task_name:"HUR UPPLEVER DU DIN KOL? – COPD ASSESSMENT TEST (CAT)" };
    m[p+"mmrc-data"] ={url:H+"/form-grid/questionnaires/mmrc-data.html",Table:"crs-kol-mmrc",form_module:"mmrc-form", task_name:"MMRC" };
    m[p+"mmrc-form"] ={url:H+"/form-grid/questionnaires/mmrc-form.html",Table:"crs-kol-mmrc",progress:'p4_6', task_name:"MMRC" };
    m[p+"hads-data"] ={url:H+"/form-grid/questionnaires/hads-data.html",Table:"crs-kol-hads",form_module:"hads-form", task_name:"HAD SJÄLVSKATTNINGSFORMULÄR" };
    m[p+"hads-form"] ={url:H+"/form-grid/questionnaires/hads-form.html",Table:"crs-kol-hads",progress:'p4_7', task_name:"HAD SJÄLVSKATTNINGSFORMULÄR" };
    m[p+"munhalsa-data"] ={url:H+"/form-grid/questionnaires/munhalsa-data.html",Table:"crs-kol-munhalsa",form_module:"munhalsa-form", task_name:"MUNHÄLSA" };
    m[p+"munhalsa-form"] ={url:H+"/form-grid/questionnaires/munhalsa-form.html",Table:"crs-kol-munhalsa",progress:'p4_8', task_name:"MUNHÄLSA" };
    m[p+"halsodeklaration-data"] ={url:H+"/form-grid/questionnaires/halsodeklaration-data.html",Table:"crs-kol-halsodeklaration",form_module:"halsodeklaration-form", task_name:"HÄLSODEKLARATION" };
    m[p+"halsodeklaration-form"] ={url:H+"/form-grid/questionnaires/halsodeklaration-form.html",Table:"crs-kol-halsodeklaration",progress:'p5_1', task_name:"HÄLSODEKLARATION" };

    m[p+"samtycke-data"] ={url:H+"/form-grid/backend/samtycke-data.html",Table:"crs-kol-samtycke",form_module:"samtycke-form", task_name:"Samtycke" };
    m[p+"samtycke-form"] ={url:H+"/form-grid/backend/samtycke-form.html",Table:"crs-kol-samtycke",progress:'p1_1', task_name:"Samtycke" };
    m[p+"lab-data"] ={url:H+"/form-grid/backend/lab-data.html",Table:"crs-kol-lab",form_module:"lab-form", task_name:"Laboratorie resultat" };
    m[p+"lab-form"] ={url:H+"/form-grid/backend/lab-form.html",Table:"crs-kol-lab",progress:'p2_1', task_name:"Laboratorie resultat" };
    m[p+"spirometri-data"] ={url:H+"/form-grid/backend/spirometri-data.html",Table:"crs-kol-spirometri",form_module:"spirometri-form", task_name:"Spirometri" };
    m[p+"spirometri-form"] ={url:H+"/form-grid/backend/spirometri-form.html",Table:"crs-kol-spirometri",progress:'p2_2', task_name:"Spirometri" };
    m[p+"langd-vikt-data"] ={url:H+"/form-grid/backend/langd-vikt-data.html",Table:"crs-kol-langd-vikt",form_module:"langd-vikt-form", task_name:"Längd och vikt" };
    m[p+"langd-vikt-form"] ={url:H+"/form-grid/backend/langd-vikt-form.html",Table:"crs-kol-langd-vikt",progress:'p3_1', task_name:"Längd och vikt" };
    m[p+"fiberskopi-data"] ={url:H+"/form-grid/backend/fiberskopi-data.html",Table:"crs-kol-fiberskopi",form_module:"fiberskopi-form", task_name:"Fiberskopi" };
    m[p+"fiberskopi-form"] ={url:H+"/form-grid/backend/fiberskopi-form.html",Table:"crs-kol-fiberskopi",progress:'p3_2', task_name:"Fiberskopi" };
    m[p+"rhinomanometri-data"] ={url:H+"/form-grid/backend/rhinomanometri-data.html",Table:"crs-kol-rhinomanometri",form_module:"rhinomanometri-form", task_name:"Rhinomanometri" };
    m[p+"rhinomanometri-form"] ={url:H+"/form-grid/backend/rhinomanometri-form.html",Table:"crs-kol-rhinomanometri",progress:'p3_3', task_name:"Rhinomanometri" };
    m[p+"akustisk-rhinomanometri-data"] ={url:H+"/form-grid/backend/akustisk-rhinomanometri-data.html",Table:"crs-kol-akustisk-rhinomanometri",form_module:"akustisk-rhinomanometri-form", task_name:"Akustisk rhinomanometri" };
    m[p+"akustisk-rhinomanometri-form"] ={url:H+"/form-grid/backend/akustisk-rhinomanometri-form.html",Table:"crs-kol-akustisk-rhinomanometri",progress:'p3_4', task_name:"Akustisk rhinomanometri" };
    m[p+"cbct-data"] ={url:H+"/form-grid/backend/cbct-data.html",Table:"crs-kol-cbct",form_module:"cbct-form", task_name:"CBCT" };
    m[p+"cbct-form"] ={url:H+"/form-grid/backend/cbct-form.html",Table:"crs-kol-cbct",progress:'p5_1', task_name:"CBCT" };
    m[p+"derived-data"] ={url:H+"/form-grid/backend/derived-data.html",Table:"crs-kol-derived",form_module:"derived-form", task_name:"DERIVED" };
    m[p+"derived-form"] ={url:H+"/form-grid/backend/derived-form.html",Table:"crs-kol-derived",progress:'p6_1', task_name:"DERIVED" };
    m[p+"progress-form"] ={url:H+"/form-grid/backend/progress-form.html",   Table:"crs-kol-progress",task_name:"Progress form"};
 
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
