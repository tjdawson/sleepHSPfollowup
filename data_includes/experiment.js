var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_tace_thanks_highest","sep",
"test_geck_na_lowest","sep",
"test_blime_toy_target","sep",
"test_doon_pretty_highest","sep",
"test_telpen_okay_lowest","sep",
"test_zant_book_target","sep",
"test_geck_nose_target","sep",
"test_vash_elephant_lowest","sep",
"test_tiz_new_distractor","sep",
"test_geck_look_distractor","sep",
"test_tiz_spin_highest","sep",
"test_mipen_bag_target","sep",
"test_tula_bib_lowest","sep",
"test_zant_na_lowest","sep",
"test_tace_messy_distractor","sep",
"test_jair_time_target","sep",
"test_zant_throw_distractor","sep",
"test_bist_horse_target","sep",
"test_mipen_here_distractor","sep",
"test_vash_here_highest","sep",
"test_zant_new_highest","sep",
"test_bist_na_lowest","sep",
"test_tace_telephone_target","sep",
"test_doon_na_lowest","sep",
"test_jair_careful_highest","sep",
"test_tiz_thing_target","sep",
"test_telpen_ball_target","sep",
"test_tace_na_lowest","sep",
"test_vash_spin_distractor","sep",
"test_blime_sit_lowest","sep",
"test_doon_careful_distractor","sep",
"test_jair_na_lowest","sep",
"test_telpen_throw_highest","sep",
"test_telpen_thanks_distractor","sep",
"test_tula_telephone_target","sep",
"test_blime_smelly_highest","sep",
"test_tula_give_highest","sep",
"test_geck_messy_highest","sep",
"test_bist_what_distractor","sep",
"test_tiz_bag_lowest","sep",
"test_tula_smelly_distractor","sep",
"test_vash_shoe_target","sep",
"test_bist_look_highest","sep",
"test_mipen_leave_lowest","sep",
"test_mipen_what_highest","sep",
"test_blime_pretty_distractor","sep",
"test_jair_give_distractor","sep",
"test_doon_necklace_target","outro1","sr","outro2"
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
["test_tula_telephone_target", "Form", { 
html: {include: "test_tula_telephone_target.html"} 
}],

["test_tula_give_highest", "Form", { 
html: {include: "test_tula_give_highest.html"} 
}],

["test_tula_bib_lowest", "Form", { 
html: {include: "test_tula_bib_lowest.html"} 
}],

["test_tula_smelly_distractor", "Form", { 
html: {include: "test_tula_smelly_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_here_highest", "Form", { 
html: {include: "test_vash_here_highest.html"} 
}],

["test_vash_elephant_lowest", "Form", { 
html: {include: "test_vash_elephant_lowest.html"} 
}],

["test_vash_spin_distractor", "Form", { 
html: {include: "test_vash_spin_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_messy_highest", "Form", { 
html: {include: "test_geck_messy_highest.html"} 
}],

["test_geck_na_lowest", "Form", { 
html: {include: "test_geck_na_lowest.html"} 
}],

["test_geck_look_distractor", "Form", { 
html: {include: "test_geck_look_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_spin_highest", "Form", { 
html: {include: "test_tiz_spin_highest.html"} 
}],

["test_tiz_bag_lowest", "Form", { 
html: {include: "test_tiz_bag_lowest.html"} 
}],

["test_tiz_new_distractor", "Form", { 
html: {include: "test_tiz_new_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_look_highest", "Form", { 
html: {include: "test_bist_look_highest.html"} 
}],

["test_bist_na_lowest", "Form", { 
html: {include: "test_bist_na_lowest.html"} 
}],

["test_bist_what_distractor", "Form", { 
html: {include: "test_bist_what_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_careful_highest", "Form", { 
html: {include: "test_jair_careful_highest.html"} 
}],

["test_jair_na_lowest", "Form", { 
html: {include: "test_jair_na_lowest.html"} 
}],

["test_jair_give_distractor", "Form", { 
html: {include: "test_jair_give_distractor.html"} 
}],

["test_tace_telephone_target", "Form", { 
html: {include: "test_tace_telephone_target.html"} 
}],

["test_tace_thanks_highest", "Form", { 
html: {include: "test_tace_thanks_highest.html"} 
}],

["test_tace_na_lowest", "Form", { 
html: {include: "test_tace_na_lowest.html"} 
}],

["test_tace_messy_distractor", "Form", { 
html: {include: "test_tace_messy_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_pretty_highest", "Form", { 
html: {include: "test_doon_pretty_highest.html"} 
}],

["test_doon_na_lowest", "Form", { 
html: {include: "test_doon_na_lowest.html"} 
}],

["test_doon_careful_distractor", "Form", { 
html: {include: "test_doon_careful_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_throw_highest", "Form", { 
html: {include: "test_telpen_throw_highest.html"} 
}],

["test_telpen_okay_lowest", "Form", { 
html: {include: "test_telpen_okay_lowest.html"} 
}],

["test_telpen_thanks_distractor", "Form", { 
html: {include: "test_telpen_thanks_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_smelly_highest", "Form", { 
html: {include: "test_blime_smelly_highest.html"} 
}],

["test_blime_sit_lowest", "Form", { 
html: {include: "test_blime_sit_lowest.html"} 
}],

["test_blime_pretty_distractor", "Form", { 
html: {include: "test_blime_pretty_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_new_highest", "Form", { 
html: {include: "test_zant_new_highest.html"} 
}],

["test_zant_na_lowest", "Form", { 
html: {include: "test_zant_na_lowest.html"} 
}],

["test_zant_throw_distractor", "Form", { 
html: {include: "test_zant_throw_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_what_highest", "Form", { 
html: {include: "test_mipen_what_highest.html"} 
}],

["test_mipen_leave_lowest", "Form", { 
html: {include: "test_mipen_leave_lowest.html"} 
}],

["test_mipen_here_distractor", "Form", { 
html: {include: "test_mipen_here_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];