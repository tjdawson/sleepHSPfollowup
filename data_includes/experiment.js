var manualSendResults = true; 
var shuffleSequence = seq("intro", "intro1", "sep", 
"test_geck_Closet_distractor","sep",
"test_bist_Stay_lowest","sep",
"test_mipen_bag_target","sep",
"test_tiz_That_lowest","sep",
"test_blime_Baby_lowest","sep",
"test_doon_Book_distractor","sep",
"test_tiz_Clean_distractor","sep",
"test_zant_Where_lowest","sep",
"test_blime_Sit_highest","sep",
"test_bist_Outside_highest","sep",
"test_telpen_Ball_highest","sep",
"test_geck_Work_lowest","sep",
"test_vash_shoe_target","sep",
"test_blime_Here_distractor","sep",
"test_jair_Closet_highest","sep",
"test_vash_Here_lowest","sep",
"test_zant_book_target","sep",
"test_tula_mommy_target","sep",
"test_jair_Clean_distractor","sep",
"test_blime_toy_target","sep",
"test_telpen_There_lowest","sep",
"test_tula_Here_highest","sep",
"test_tace_Telephone_highest","sep",
"test_mipen_Bag_lowest","sep",
"test_jair_time_target","sep",
"test_vash_Shoe_highest","sep",
"test_bist_horse_target","sep",
"test_mipen_Book_distractor","sep",
"test_vash_Closet_distractor","sep",
"test_telpen_ball_target","sep",
"test_tace_Ball_distractor","sep",
"test_jair_Ok_lowest","sep",
"test_tace_phone_target","sep",
"test_mipen_Bag_highest","sep",
"test_zant_Shoe_distractor","sep",
"test_zant_Book_highest","sep",
"test_bist_Here_distractor","sep",
"test_tiz_Bag_highest","sep",
"test_tace_Wait_lowest","sep",
"test_tula_Thanks_lowest","sep",
"test_geck_nose_target","sep",
"test_doon_Necklace_highest","sep",
"test_doon_necklace_target","sep",
"test_doon_Where_lowest","sep",
"test_tula_Book_distractor","sep",
"test_tiz_thing_target","sep",
"test_telpen_Sit_distractor","sep",
"test_geck_Clean_highest","sr","outro1","outro2"
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
            countsForProgressBar: false
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
["test_tula_mommy_target", "Form", { 
html: {include: "test_tula_mommy_target.html"} 
}],

["test_tula_Here_highest", "Form", { 
html: {include: "test_tula_Here_highest.html"} 
}],

["test_tula_Thanks_lowest", "Form", { 
html: {include: "test_tula_Thanks_lowest.html"} 
}],

["test_tula_Clean_distractor", "Form", { 
html: {include: "test_tula_Clean_distractor.html"} 
}],

["test_vash_shoe_target", "Form", { 
html: {include: "test_vash_shoe_target.html"} 
}],

["test_vash_Shoe_highest", "Form", { 
html: {include: "test_vash_Shoe_highest.html"} 
}],

["test_vash_Here_lowest", "Form", { 
html: {include: "test_vash_Here_lowest.html"} 
}],

["test_vash_Book_distractor", "Form", { 
html: {include: "test_vash_Book_distractor.html"} 
}],

["test_geck_nose_target", "Form", { 
html: {include: "test_geck_nose_target.html"} 
}],

["test_geck_Clean_highest", "Form", { 
html: {include: "test_geck_Clean_highest.html"} 
}],

["test_geck_Work_lowest", "Form", { 
html: {include: "test_geck_Work_lowest.html"} 
}],

["test_geck_Bag_distractor", "Form", { 
html: {include: "test_geck_Bag_distractor.html"} 
}],

["test_tiz_thing_target", "Form", { 
html: {include: "test_tiz_thing_target.html"} 
}],

["test_tiz_Bag_highest", "Form", { 
html: {include: "test_tiz_Bag_highest.html"} 
}],

["test_tiz_That_lowest", "Form", { 
html: {include: "test_tiz_That_lowest.html"} 
}],

["test_tiz_Clean_distractor", "Form", { 
html: {include: "test_tiz_Clean_distractor.html"} 
}],

["test_bist_horse_target", "Form", { 
html: {include: "test_bist_horse_target.html"} 
}],

["test_bist_Outside_highest", "Form", { 
html: {include: "test_bist_Outside_highest.html"} 
}],

["test_bist_Stay_lowest", "Form", { 
html: {include: "test_bist_Stay_lowest.html"} 
}],

["test_bist_Book_distractor", "Form", { 
html: {include: "test_bist_Book_distractor.html"} 
}],

["test_jair_time_target", "Form", { 
html: {include: "test_jair_time_target.html"} 
}],

["test_jair_Closet_highest", "Form", { 
html: {include: "test_jair_Closet_highest.html"} 
}],

["test_jair_Ok_lowest", "Form", { 
html: {include: "test_jair_Ok_lowest.html"} 
}],

["test_jair_Here_distractor", "Form", { 
html: {include: "test_jair_Here_distractor.html"} 
}],

["test_tace_phone_target", "Form", { 
html: {include: "test_tace_phone_target.html"} 
}],

["test_tace_Telephone_highest", "Form", { 
html: {include: "test_tace_Telephone_highest.html"} 
}],

["test_tace_Wait_lowest", "Form", { 
html: {include: "test_tace_Wait_lowest.html"} 
}],

["test_tace_Here_distractor", "Form", { 
html: {include: "test_tace_Here_distractor.html"} 
}],

["test_doon_necklace_target", "Form", { 
html: {include: "test_doon_necklace_target.html"} 
}],

["test_doon_Necklace_highest", "Form", { 
html: {include: "test_doon_Necklace_highest.html"} 
}],

["test_doon_Where_lowest", "Form", { 
html: {include: "test_doon_Where_lowest.html"} 
}],

["test_doon_Closet_distractor", "Form", { 
html: {include: "test_doon_Closet_distractor.html"} 
}],

["test_telpen_ball_target", "Form", { 
html: {include: "test_telpen_ball_target.html"} 
}],

["test_telpen_Ball_highest", "Form", { 
html: {include: "test_telpen_Ball_highest.html"} 
}],

["test_telpen_There_lowest", "Form", { 
html: {include: "test_telpen_There_lowest.html"} 
}],

["test_telpen_Closet_distractor", "Form", { 
html: {include: "test_telpen_Closet_distractor.html"} 
}],

["test_blime_toy_target", "Form", { 
html: {include: "test_blime_toy_target.html"} 
}],

["test_blime_Sit_highest", "Form", { 
html: {include: "test_blime_Sit_highest.html"} 
}],

["test_blime_Baby_lowest", "Form", { 
html: {include: "test_blime_Baby_lowest.html"} 
}],

["test_blime_Telephone_distractor", "Form", { 
html: {include: "test_blime_Telephone_distractor.html"} 
}],

["test_zant_book_target", "Form", { 
html: {include: "test_zant_book_target.html"} 
}],

["test_zant_Book_highest", "Form", { 
html: {include: "test_zant_Book_highest.html"} 
}],

["test_zant_Where_lowest", "Form", { 
html: {include: "test_zant_Where_lowest.html"} 
}],

["test_zant_Clean_distractor", "Form", { 
html: {include: "test_zant_Clean_distractor.html"} 
}],

["test_mipen_bag_target", "Form", { 
html: {include: "test_mipen_bag_target.html"} 
}],

["test_mipen_Bag_highest", "Form", { 
html: {include: "test_mipen_Bag_highest.html"} 
}],

["test_mipen_Bag_lowest", "Form", { 
html: {include: "test_mipen_Bag_lowest.html"} 
}],

["test_mipen_Telephone_distractor", "Form", { 
html: {include: "test_mipen_Telephone_distractor.html"} 
}],

["end", "Form", {
            html: {include: "end.html"},
            hideProgressBar: true,
            countsForProgressBar: false
        
        }]
    ];