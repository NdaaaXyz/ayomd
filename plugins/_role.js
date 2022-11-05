let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Rakyat V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Rakyat IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Rakyat III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Rakyat II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Rakyat I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Rakyat Elite V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Rakyat Elite IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Rakyat Elite III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Rakyat Elite II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Rakyat Elite I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Vip V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Vip IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Vip III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Vip II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Vip I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Helper V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Helper IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Helper III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Helper II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Helper I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Moderator V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Moderator IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Moderator III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Moderator II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Moderator I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Dev V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Dev IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Dev III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Dev II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Dev I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Super Dev V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Super Dev IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Super Dev III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Super Dev II'
                                                                                                                                            : ((user.level >= 100) && (user.level <= 200)) ? 'Super Dev II|'
                                                                                                                                                : ((user.level >= 200) && (user.level <= Infinity)) ? 'Owner'
                                                                                                                                           
                                                                                                                                            
    user.role = role
    return !0
}

module.exports = handler