<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180103031017 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game ADD home_team_id INT DEFAULT NULL, ADD away_team_id INT DEFAULT NULL, ADD week INT NOT NULL');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C9C4C13F6 FOREIGN KEY (home_team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_232B318C45185D02 FOREIGN KEY (away_team_id) REFERENCES team (id)');
        $this->addSql('CREATE INDEX IDX_232B318C9C4C13F6 ON game (home_team_id)');
        $this->addSql('CREATE INDEX IDX_232B318C45185D02 ON game (away_team_id)');
        $this->addSql('ALTER TABLE player_game_stats ADD player_id INT DEFAULT NULL, ADD game_id INT DEFAULT NULL, ADD touchdowns INT NOT NULL, ADD interceptions INT NOT NULL, ADD completions INT NOT NULL, ADD attempts INT NOT NULL');
        $this->addSql('ALTER TABLE player_game_stats ADD CONSTRAINT FK_3AD19A1899E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE player_game_stats ADD CONSTRAINT FK_3AD19A18E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('CREATE INDEX IDX_3AD19A1899E6F5DF ON player_game_stats (player_id)');
        $this->addSql('CREATE INDEX IDX_3AD19A18E48FD905 ON player_game_stats (game_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C9C4C13F6');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_232B318C45185D02');
        $this->addSql('DROP INDEX IDX_232B318C9C4C13F6 ON game');
        $this->addSql('DROP INDEX IDX_232B318C45185D02 ON game');
        $this->addSql('ALTER TABLE game DROP home_team_id, DROP away_team_id, DROP week');
        $this->addSql('ALTER TABLE player_game_stats DROP FOREIGN KEY FK_3AD19A1899E6F5DF');
        $this->addSql('ALTER TABLE player_game_stats DROP FOREIGN KEY FK_3AD19A18E48FD905');
        $this->addSql('DROP INDEX IDX_3AD19A1899E6F5DF ON player_game_stats');
        $this->addSql('DROP INDEX IDX_3AD19A18E48FD905 ON player_game_stats');
        $this->addSql('ALTER TABLE player_game_stats DROP player_id, DROP game_id, DROP touchdowns, DROP interceptions, DROP completions, DROP attempts');
    }
}
