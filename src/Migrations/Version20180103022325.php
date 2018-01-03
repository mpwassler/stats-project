<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180103022325 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE player ADD drafted_by_team_id INT DEFAULT NULL, ADD first_name VARCHAR(70) NOT NULL, ADD last_name VARCHAR(70) NOT NULL, ADD draft_round INT NOT NULL, ADD draft_season INT NOT NULL, ADD draft_pick_number INT NOT NULL, ADD birth_date DATE NOT NULL, ADD draft_type VARCHAR(10) NOT NULL');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A655D046F57 FOREIGN KEY (drafted_by_team_id) REFERENCES team (id)');
        $this->addSql('CREATE INDEX IDX_98197A655D046F57 ON player (drafted_by_team_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A655D046F57');
        $this->addSql('DROP INDEX IDX_98197A655D046F57 ON player');
        $this->addSql('ALTER TABLE player DROP drafted_by_team_id, DROP first_name, DROP last_name, DROP draft_round, DROP draft_season, DROP draft_pick_number, DROP birth_date, DROP draft_type');
    }
}
