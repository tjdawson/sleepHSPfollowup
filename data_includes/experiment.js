var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_bist_horse_target","sep",
"test_bist_fun_lowest","sep",
"test_mipen_hi_lowest","sep",
"test_jair_more_highest","sep",
"test_vash_shoe_target","sep",
"test_geck_nose_target","sep",
"test_tace_call_lowest","sep",
"test_vash_look_highest","sep",
"test_tula_daddy_lowest","sep",
"test_geck_still_lowest","sep",
"test_blime_thank you_distractor","sep",
"test_jair_come_distractor","sep",
"test_mipen_more_distractor","sep",
"test_jair_oops_lowest","sep",
"test_tiz_thank you_highest","sep",
"test_tula_pretty_distractor","sep",
"test_telpen_throw_lowest","sep",
"test_zant_this_distractor","sep",
"test_vash_this_lowest","sep",
"test_tace_thank you_distractor","sep",
"test_doon_thank you_distractor","sep",
"test_bist_come_highest","sep",
"test_tace_this_highest","sep",
"test_doon_here_lowest","sep",
"test_blime_nicely_lowest","sep",
"test_tula_thank you_highest","sep",
"test_telpen_ball_target","sep",
"test_doon_pretty_highest","sep",
"test_telpen_bounce_highest","sep",
"test_zant_gift_lowest","sep",
"test_zant_book_target","sep",
"test_vash_pretty_distractor","sep",
"test_geck_here_distractor","sep",
"test_mipen_here_highest","sep",
"test_tiz_pretty_distractor","sep",
"test_jair_time_target","sep",
"test_mipen_bag_target","sep",
"test_doon_necklace_target","sep",
"test_geck_nice_highest","sep",
"test_tiz_thing_target","sep",
"test_zant_follow_highest","sep",
"test_bist_thank you_distractor","sep",
"test_blime_toy_target","sep",
"test_telpen_thank you_distractor","sep",
"test_blime_no_highest","sep",
"test_tiz_easy_lowest","sep",
"test_tace_phone_target","sep",
"test_tula_mommy_target","outro1","sr","outro2",
);

var defaults = [
        "Separator", {
            transfer: "keypress",
            normalMessage: "Press any key to continue.",
            errorMessage: "Press any key to continue."
        },
        "DashedSentence", {
            mode: "self-paced reading"
        },
        "AcceptabilityJudgment", {
            as: ["1", "2", "3", "4", "5", "6", "7"],
            presentAsScale: true,
            instructions: "Use number keys or click boxes to answer.",
            leftComment: "(Bad)", rightComment: "(Good)"
        },
        "Question", {
            hasCorrect: true
        },
        "Message", {
            hideProgressBar: true
        },
        "Form", {
            hideProgressBar: false,
            continueOnReturn: true,
            saveReactionTime: false
        }
    ];

var items = [    ["sr", "__SendResults__", { }],
["sep", "Separator", { }],
        
        //
        
        ["intro", "Form", {
            html: {include: "intro.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["intro1", "Form", {
            html: {include: "intro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false,
    validators: {
    audiotest: function(s)
    { if (s == "3401")
    return true; else return "Incorrect entry for \u2018test numbers\u2019";}
    }
        
        }],
        
        //
        
        ["outro1", "Form", {
            html: {include: "outro1.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }],
        
        //
        
        ["outro2", "Form", {
            html: { include: "outro2.html" },
            hideProgressBar: true,
            countsForProgressBar: false,
        } ],
        
        //
["tula", "Form", { 
html: {include: "tula.html"} 
}],

["vash", "Form", { 
html: {include: "vash.html"} 
}],

["geck", "Form", { 
html: {include: "geck.html"} 
}],

["tiz", "Form", { 
html: {include: "tiz.html"} 
}],

["bist", "Form", { 
html: {include: "bist.html"} 
}],

["jair", "Form", { 
html: {include: "jair.html"} 
}],

["tace", "Form", { 
html: {include: "tace.html"} 
}],

["doon", "Form", { 
html: {include: "doon.html"} 
}],

["telpen", "Form", { 
html: {include: "telpen.html"} 
}],

["blime", "Form", { 
html: {include: "blime.html"} 
}],

["zant", "Form", { 
html: {include: "zant.html"} 
}],

["mipen", "Form", { 
html: {include: "mipen.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];