import mysql.connector
import csv

# Just a little script to help move the data into a more normalized structure 
# teams and players I just imported by hand

cnx = mysql.connector.connect( user='root',password='',	host='127.0.0.1', database='pff')
cursor = cnx.cursor(buffered=True)


def get_csv_data():
    stats_to_import = []
    with open('statistics.csv', 'r') as csvfile:
        statsReader = csv.reader(csvfile)
        stats_list = []
        for row in statsReader:
            stats_list.append(row)
        for stat in stats_list:
            row_dict = {}
            for i in range(0, len(stat)):
                row_dict[stats_list[0][i]] = stat[i]
            stats_to_import.append(row_dict)   
        return stats_to_import

def get_game_data():
    games = []
    for stats in get_csv_data():
        game_data = {
            'week': stats['week'],
            'home_team': stats['home_team'],
            'away_team': stats['away_team']
        }
        games.append(game_data)
    games.pop(0)
    return games

def get_game_player_stat_data():
    game_player_stats = []
    for stats in get_csv_data():
        game_player_stats_data = {
            'yards': stats['\ufeff"yards"'],
            'player_id': stats['player_id'],
            'on_home_team': stats['on_home_team'],
            'interceptions': stats['interceptions'],
            'touchdowns': stats['touchdowns'],
            'completions': stats['completions'],
            'attempts': stats['attempts']
        }
        game_player_stats.append(game_player_stats_data)
    game_player_stats.pop(0)
    return game_player_stats


player_stats = get_game_player_stat_data()
games = get_game_data()

cnt = 1
game_insert_query = "INSERT INTO game (home_team_id, away_team_id, week ) VALUES"
for game in games:
    query = ("SELECT id FROM team WHERE name = '" + game['home_team'] + "'"  )
    away_query = ("SELECT id FROM team WHERE name = '" + game['away_team'] + "'"  )
    cursor.execute(query, (game['home_team']))
    for id in cursor:
        game['home_team_id'] = id[0]
    cursor.execute(away_query, (game['away_team']))
    for id in cursor:
        game['away_team_id'] = id[0]    
    if len(games) == cnt:
        game_insert_query += " (" + str(game['home_team_id']) + ", " +   str(game['away_team_id']) +", "+ str( game['week']) + ");"
    else:
        game_insert_query += " (" + str(game['home_team_id']) + ", " +   str(game['away_team_id']) +", "+ str( game['week']) + "),"        
    player_stats[cnt - 1]['game_id'] = cnt
    cnt += 1
cursor.execute(game_insert_query)


stats_insert_query = "INSERT INTO player_game_stats (player_id, game_id, yards, touchdowns, interceptions, completions, attempts) VALUES"
cnt = 1
for stats in player_stats:
    if len(player_stats) == cnt:
        query_end = ");"
    else:
        query_end = "),"
    stats_insert_query += " (" +           \
        str(stats['player_id'])  + ", " +  \
        str(stats['game_id']) +", "+       \
        str(stats['yards']) +", "+       \
        str(stats['touchdowns']) +", "+    \
        str(stats['interceptions']) +", "+ \
        str(stats['completions']) +", "+   \
        str( stats['attempts']) + query_end
    cnt += 1
print(stats_insert_query)     


cursor.execute(stats_insert_query)
cnx.commit()
cnx.close()
