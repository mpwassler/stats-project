import mysql.connector
import csv

cnx = mysql.connector.connect( user='root',password='',	host='127.0.0.1', database='pff')
cursor = cnx.cursor()

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

# print(stats_to_import)


games = []
game_player_stats = []

for stats in stats_to_import:
		print(stats['home_team'])
		print(stats['away_team'])

# home_team
# away_team