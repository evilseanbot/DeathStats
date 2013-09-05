FSR.surveydefs = [{
    name: 'browse',
    section: 'rome',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting socialsecurity.gov and using our electronic services. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br>This survey is conducted by ForeSee, an independent company.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 25,
        lf: 0
    },
    include: {
        urls: ['rome_survey.html']
    }
}, {
    name: 'browse',
    section: 'BSO',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the <b>Business Services Online</b> section of the SSA.gov site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 7.5,
        lf: 0
    },
    include: {
        urls: ['bsosurvey.html']
    }
}, {
    name: 'browse',
    section: 'MedicareSubsidy',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the SSA.gov site and using the <b>online application for Help with Medicare Prescription Plan Drug Costs</b>.  You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>',
        locales: [{
            locale: 'es',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">Nos gustar&iacute;a recibir sus comentarios</b></font><br><br>Gracias por visitar el sitio de Internet segurosocial.gov y usar la solicitud para El Beneficio Adicional con los gastos del plan de medicamentos recetados de Medicare. Usted ha sido seleccionado para participar en una encuesta de satisfacci&oacute;n del cliente para hacernos saber c&oacute;mo podemos mejorar su experiencia por Internet.<br><br><font size=\"1\">Esta encuesta la lleva a cabo una empresa independiente llamada, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sí, responderé',
                decline: 'No, gracias'
            }
        }]
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 25,
        lf: 0,
        locales: [{
            locale: 'es',
            sp: 100,
            lf: 0
        }]
    },
    include: {
        urls: ['i1020_survey.html', 'i1020/encuesta.html']
    }
}, {
    name: 'browse',
    section: 'DisabilityReport',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the SSA.gov site and using the <b>internet Disability Report</b> service.  You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 10,
        lf: 0
    },
    include: {
        urls: ['radr_close.html']
    }
}, {
    name: 'browse',
    section: 'FAQSat',
    lock: 1,
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the <b>FAQ</b> section of the socialsecurity.gov site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'later',
        after: 'leaving-section'
    },
    criteria: {
        sp: 1.5,
        lf: 1
    },
    include: {
        urls: ['ssa-custhelp']
    }
}, {
    name: 'browse',
    section: 'iClaims',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the SSA.gov site and using the <b>Benefit Application</b>.  You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>',
        locales: [{
            locale: 'es',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">Nos gustar&iacute;a recibir sus comentarios</b></font><br><br>Gracias por visitar el sitio de Internet segurosocial.gov y usar la solicitud para sus <b>Beneficios Sociales</b>. Usted ha sido seleccionado para participar en una encuesta de satisfacci&oacute;n del cliente para hacernos saber c&oacute;mo podemos mejorar su experiencia por Internet.<br><br><font size=\"1\">Esta encuesta la lleva a cabo una empresa independiente llamada, ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sí, responderé',
                decline: 'No, gracias'
            }
        }]
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 7.5,
        lf: 0,
        locales: [{
            locale: 'es',
            sp: 100,
            lf: 0
        }]
    },
    include: {
        urls: ['launchSurvey.html', 'isba_close.html', 'iClaim/encuesta.html', 'espanol/jubilacion2/gracias-cerrar.htm']
    }
}, {
    name: 'browse',
    section: 'iAppeal',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for using the Social Security Administration\'s online disability appeal. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 30,
        lf: 0
    },
    include: {
        urls: ['iAppeal_close.html']
    }
}, {
    name: 'browse',
    section: 'RetireEst',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for using the Retirement Estimator on the SSA.gov site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>',
        locales: [{
            locale: 'es',
            content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">Nos gustar&iacute;a sus sugerencias.</b></font><br><br>Gracias por usar el Calculador de beneficios por jubilaci&oacute;n en el sitio de Internet segurosocial.gov. Ha sido seleccionado al azar para participar en una encuesta de nivel de satisfacci&oacute;n del cliente para hacernos saber c&oacute;mo podemos mejorar su experiencia en nuestro sitio de Internet.<br><br><font size=\"1\">Esta encuesta es llevada a cabo por una empresa independiente llamada,  ForeSee Results.</font><br></div></div></BODY></HTML>',
            buttons: {
                accept: 'Sí, responderé',
                decline: 'No, gracias'
            }
        }]
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: 10,
        lf: 0,
        locales: [{
            locale: 'es',
            sp: 100,
            lf: 0
        }]
    },
    include: {
        urls: ['re_close.html', 're_close_es.html']
    }
}, {
    name: 'browse',
    section: 'main',
    invite: {
        when: 'onentry',
        content: '<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><HTML><HEAD><TITLE>Foresee Invite</TITLE></HEAD><BODY><div id=\"fsrinvite\"><div id=\"fsrcontainer\"><div class=\"fsri_sitelogo\"><img src=\"{%baseHref%}lgssalogo.gif\" alt=\"Site Logo\"></div><div class=\"fsri_fsrlogo\"><img src=\"{%baseHref%}fsrlogo.gif\" alt=\"Site Logo\"></div></div><div class=\"fsri_body\"><br><br><b><font size=\"3\">We\'d like your feedback.</b></font><br><br>Thank you for visiting the SSA.gov site. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.<br><br><font size=\"1\">This survey is conducted by an independent company, ForeSee.</font><br></div></div></BODY></HTML>'
    },
    pop: {
        when: 'now'
    },
    criteria: {
        sp: .665,
        lf: 4
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 0,
    
    repeatoverride: false,
    
    altcookie: {},
    
    language: {
        locale: 'en',
        src: 'location',
        locales: [{
            match: 'segurosocial',
            locale: 'es'
        }, {
            match: 're_close_es',
            locale: 'es'
        }, {
            match: 'encuesta.html',
            locale: 'es'
        }, {
            match: 'gracias-cerrar.htm',
            locale: 'es'
        }]
    },
    
    exclude: {},
    
    ipexclude: 'fsr$ip',
    
    invite: {
        exclude: {
            local: [],
            referrer: []
        },
        include: {
            local: ['.']
        },
        
        width: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        timeout: 0,
        buttons: {
            accept: "Yes, I'll give feedback",
            decline: 'No thanks'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        hide: []
    },
    
    tracker: {
        width: '500',
        height: '350',
        timeout: 3,
        adjust: true,
        alert: {
            enabled: false,
            message: '.'
        },
        url: 'tracker.html'
    },
    
    survey: {
        width: 550,
        height: 600
    },
    
    qualifier: {
        width: '625',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: false,
        url: 'qualifying.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '500',
        height: '300'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: false,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802
        },
        pd: 7,
        custom: {}
    },
    
    pool: 100,
    
    previous: true,
    
    analytics: {
        google: false
    },
    
    mode: 'first-party'
};
