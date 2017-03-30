select CAST([NEXT_FIRE_TIME]/864000000000.0 -693595.0 AS DATETIME), getutcdate(), TRIGGER_NAME
from QRTZ_TRIGGERS
where TRIGGER_GROUP = 'JiraSync'

/*

delete from QRTZ_TRIGGERS
where TRIGGER_GROUP = 'JiraSync'

delete from QRTZ_JOB_DETAILS
where JOB_GROUP = 'JiraSync'

*/