// Текущая дата
function GetDate(type, subtype = '', offset = 0)
{
    let result = '';

    // Формируем дату
    let v = new Date();

    switch (type)
    {
        case 'current':

            switch (subtype)
            {
                case 'year':
                case 'y':
                    result = v.getFullYear().toString();
                    break;
                case 'month':
                case 'm':
                    result = (v.getMonth() + 1).toString();
                    break;
                case 'date':
                case 'd':
                    result = v.getDate().toString();
                    break;
                default:
                    result = v.toISOString();
                    break;
            }
            break;
            
        case 'add':
        case 'sub':

            switch (subtype)
            {
                case 'year':
                case 'y':
                    v.setFullYear(v.getFullYear() + offset);
                    break;
                case 'month':
                case 'm':
                    v.setMonth(v.getMonth() + offset);
                    break;
                case 'date':
                case 'd':
                    v.setDate(v.getDate() + offset);
                    break;
            }

            result = v.toISOString();
            break;
    }

    return result;
}
module.exports.GetDate = GetDate;
